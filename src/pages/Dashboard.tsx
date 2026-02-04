import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { format, formatDistanceToNow, isYesterday } from "date-fns";
import {
  ArrowLeft,
  Bug,
  Download,
  LogOut,
  Pencil,
  RefreshCw,
  Search,
} from "lucide-react";

import { supabase } from "@/lib/supabase";
import { getAuthEmail, logout } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type AttendanceStatus = "attending" | "maybe_attending" | "no";

type RegistrationRow = {
  id: string | number;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  college: string | null;
  registration_type: string | null;
  created_at: string | null;
  contacted: boolean | null;
  attendance_status: AttendanceStatus | null;
  notes: string | null;
  updated_by: string | null;
  updated_at: string | null;
};

const ATTENDANCE_LABELS: Record<AttendanceStatus, string> = {
  attending: "Attending",
  maybe_attending: "Maybe attending",
  no: "No",
};

const MAX_ROWS = 50000; // Single fetch; increase if you have more and Supabase allows

function toCsvValue(value: unknown) {
  const s =
    value === null || value === undefined
      ? ""
      : typeof value === "string"
      ? value
      : String(value);
  // CSV escaping: wrap in quotes if needed, and escape quotes by doubling.
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function downloadCsv(filename: string, rows: RegistrationRow[]) {
  const headers = [
    "id",
    "full_name",
    "email",
    "phone",
    "college",
    "registration_type",
    "created_at",
    "contacted",
    "attendance_status",
    "notes",
    "updated_by",
    "updated_at",
  ] as const;

  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => toCsvValue(r[h])).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function formatCreatedAt(value: string | null) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  const now = Date.now();
  const diffMs = now - d.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  if (diffMs < oneDay && diffMs >= 0) {
    return formatDistanceToNow(d, { addSuffix: true });
  }
  if (isYesterday(d)) {
    return `Yesterday at ${format(d, "h:mm a")}`;
  }
  if (diffMs < 7 * oneDay && diffMs >= 0) {
    return formatDistanceToNow(d, { addSuffix: true });
  }
  return format(d, "MMM d, yyyy 'at' h:mm a");
}

function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [filterContacted, setFilterContacted] = useState<"all" | "yes" | "no">(
    "all"
  );
  const [filterAttendance, setFilterAttendance] = useState<
    "all" | AttendanceStatus
  >("all");
  const [editingRow, setEditingRow] = useState<RegistrationRow | null>(null);
  const [editContacted, setEditContacted] = useState(false);
  const [editAttendance, setEditAttendance] = useState<AttendanceStatus | "">(
    ""
  );
  const [editNotes, setEditNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const openEdit = (row: RegistrationRow) => {
    setEditingRow(row);
    setEditContacted(!!row.contacted);
    setEditAttendance(row.attendance_status ?? "");
    setEditNotes(row.notes ?? "");
    setSaveError("");
  };

  const closeEdit = () => {
    setEditingRow(null);
    setSaving(false);
    setSaveError("");
  };

  const handleSaveEdit = async () => {
    if (!editingRow || !supabase) return;
    setSaving(true);
    setSaveError("");
    const updatedBy = getAuthEmail();
    const payload = {
      contacted: editContacted,
      attendance_status: editAttendance || null,
      notes: editNotes.trim() || null,
      updated_by: updatedBy,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase
      .from("registrations")
      .update(payload)
      .eq("id", editingRow.id);
    setSaving(false);
    if (error) {
      setSaveError(error.message);
      return;
    }
    queryClient.invalidateQueries({ queryKey: ["registrations"] });
    closeEdit();
  };

  const query = useQuery({
    queryKey: ["registrations"],
    enabled: !!supabase,
    queryFn: async () => {
      const res = await supabase!
        .from("registrations")
        .select(
          "id, full_name, email, phone, college, registration_type, created_at, contacted, attendance_status, notes, updated_by, updated_at",
          { count: "exact" }
        )
        .order("created_at", { ascending: false })
        .range(0, MAX_ROWS - 1);

      if (res.error) {
        console.error("[Dashboard] Supabase error:", {
          message: res.error.message,
          code: res.error.code,
          details: res.error.details,
          hint: res.error.hint,
        });
        const err = new Error(res.error.message) as Error & {
          code?: string;
          details?: string;
          hint?: string;
        };
        err.code = res.error.code;
        err.details = res.error.details;
        err.hint = res.error.hint;
        throw err;
      }

      const rows = (res.data ?? []) as RegistrationRow[];
      return { rows, count: res.count ?? rows.length };
    },
    staleTime: 10_000,
  });

  const errorDetails =
    query.error && typeof query.error === "object"
      ? (query.error as Error & {
          code?: string;
          details?: string;
          hint?: string;
        })
      : null;
  const envConfigured = !!(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const filteredRows = useMemo(() => {
    let rows = query.data?.rows ?? [];
    const q = search.trim().toLowerCase();
    if (q) {
      rows = rows.filter((r) => {
        const haystack = [
          r.full_name,
          r.email,
          r.phone,
          r.college,
          r.registration_type,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    if (filterContacted !== "all") {
      rows = rows.filter((r) =>
        filterContacted === "yes" ? !!r.contacted : !r.contacted
      );
    }
    if (filterAttendance !== "all") {
      rows = rows.filter((r) => r.attendance_status === filterAttendance);
    }
    return rows;
  }, [query.data?.rows, search, filterContacted, filterAttendance]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container-wide px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <Button asChild variant="ghost" size="sm" className="-ml-2">
                    <Link to="/">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Link>
                  </Button>
                  <Badge variant="secondary">Dashboard</Badge>
                  <span className="text-xs text-muted-foreground">
                    {getAuthEmail()}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Log out
                  </Button>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Registered users
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">
                    {filteredRows.length}
                  </span>{" "}
                  registration{filteredRows.length !== 1 ? "s" : ""}
                  {/* Supabase */}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    downloadCsv(
                      `registrations-${new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace(/:/g, "-")}.csv`,
                      filteredRows
                    )
                  }
                  disabled={filteredRows.length === 0}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => query.refetch()}
                  disabled={!supabase || query.isFetching}
                >
                  <RefreshCw
                    className={`w-4 h-4 mr-2 ${
                      query.isFetching ? "animate-spin" : ""
                    }`}
                  />
                  Refresh
                </Button>
              </div>
            </div>

            {!supabase ? (
              <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Supabase is not configured
                </p>
                <p className="text-muted-foreground">
                  Set <code className="font-mono">VITE_SUPABASE_URL</code> and{" "}
                  <code className="font-mono">VITE_SUPABASE_ANON_KEY</code> in
                  your environment to load registrations.
                </p>
              </div>
            ) : null}

            {query.isError ? (
              <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Couldn’t load registrations
                </p>
                <p className="text-muted-foreground">
                  {(query.error as Error)?.message ??
                    "Unknown error. Check Supabase table/policies."}
                </p>
                {errorDetails?.code && (
                  <p className="mt-2 text-muted-foreground font-mono text-xs">
                    Code: {errorDetails.code}
                    {errorDetails.details && ` · ${errorDetails.details}`}
                    {errorDetails.hint && ` · Hint: ${errorDetails.hint}`}
                  </p>
                )}
              </div>
            ) : null}

            {/* Debug panel: show when error or when no data (so you can check RLS) */}
            {(query.isError ||
              (query.isSuccess && (query.data?.rows?.length ?? 0) === 0)) && (
              <details className="rounded-lg border border-border bg-muted/20 p-4 text-sm">
                <summary className="flex cursor-pointer items-center gap-2 font-medium text-foreground">
                  <Bug className="h-4 w-4" />
                  Debug: why is there no data?
                </summary>
                <div className="mt-3 space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">1. Env vars:</strong>{" "}
                    {envConfigured
                      ? "Set (URL + anon key)"
                      : "Missing — add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env and restart dev server."}
                  </p>
                  <p>
                    <strong className="text-foreground">
                      2. Row Level Security (RLS):
                    </strong>{" "}
                    If the table has RLS enabled, the anon key needs a policy
                    that allows <code className="font-mono">SELECT</code>. In
                    Supabase Dashboard → Table Editor →{" "}
                    <code className="font-mono">registrations</code> → RLS, add
                    a policy:
                  </p>
                  <ul className="list-inside list-disc pl-2 space-y-1">
                    <li>
                      Name: e.g. &quot;Allow public read registrations&quot;
                    </li>
                    <li>
                      Allowed operation:{" "}
                      <code className="font-mono">SELECT</code>
                    </li>
                    <li>
                      Target roles: <code className="font-mono">anon</code>
                    </li>
                    <li>
                      Policy definition: <code className="font-mono">true</code>{" "}
                      (or leave as &quot;With check&quot; empty)
                    </li>
                  </ul>
                  <p>
                    Or run in SQL Editor:{" "}
                    <code className="block mt-1 rounded bg-muted px-2 py-1 font-mono text-xs break-all">
                      CREATE POLICY &quot;Allow anon read registrations&quot; ON
                      registrations FOR SELECT TO anon USING (true);
                    </code>
                  </p>
                  <p>
                    <strong className="text-foreground">3. Console:</strong>{" "}
                    Open DevTools (F12) → Console and look for{" "}
                    <code className="font-mono">
                      [Dashboard] Supabase error:
                    </code>{" "}
                    for the full error object.
                  </p>
                </div>
              </details>
            )}

            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, phone, college…"
                className="pl-9"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground shrink-0">
                  Contacted:
                </span>
                <div className="flex flex-wrap gap-1">
                  {(["all", "yes", "no"] as const).map((v) => (
                    <Button
                      key={v}
                      type="button"
                      variant={filterContacted === v ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterContacted(v)}
                    >
                      {v === "all"
                        ? "All"
                        : v === "yes"
                        ? "Contacted"
                        : "Not contacted"}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground shrink-0">
                  Status:
                </span>
                <div className="flex flex-wrap gap-1">
                  <Button
                    type="button"
                    variant={filterAttendance === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterAttendance("all")}
                  >
                    All
                  </Button>
                  {(Object.keys(ATTENDANCE_LABELS) as AttendanceStatus[]).map(
                    (v) => (
                      <Button
                        key={v}
                        type="button"
                        variant={filterAttendance === v ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterAttendance(v)}
                      >
                        {ATTENDANCE_LABELS[v]}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>College</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Contacted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Updated by</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="w-0" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {query.isLoading ? (
                  <TableRow>
                    <TableCell colSpan={11} className="text-muted-foreground">
                      Loading…
                    </TableCell>
                  </TableRow>
                ) : filteredRows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={11} className="text-muted-foreground">
                      No registrations found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRows.map((r) => (
                    <TableRow key={String(r.id)}>
                      <TableCell className="font-medium">
                        {r.full_name || "—"}
                      </TableCell>
                      <TableCell>{r.email || "—"}</TableCell>
                      <TableCell>{r.phone || "—"}</TableCell>
                      <TableCell>{r.college || "—"}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {r.registration_type || "—"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {r.contacted ? (
                          <Badge variant="default">Yes</Badge>
                        ) : (
                          <span className="text-muted-foreground">No</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {r.attendance_status ? (
                          <Badge variant="secondary">
                            {ATTENDANCE_LABELS[r.attendance_status]}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell
                        className="max-w-[180px] truncate"
                        title={r.notes ?? undefined}
                      >
                        {r.notes || "—"}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs whitespace-nowrap">
                        {r.updated_by
                          ? `${r.updated_by}${
                              r.updated_at
                                ? ` · ${formatCreatedAt(r.updated_at)}`
                                : ""
                            }`
                          : "—"}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {formatCreatedAt(r.created_at)}
                      </TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => openEdit(r)}
                          aria-label="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <Dialog
            open={!!editingRow}
            onOpenChange={(open) => !open && closeEdit()}
          >
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  Edit —{" "}
                  {editingRow?.full_name || editingRow?.email || "Registration"}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="edit-contacted">Contacted</Label>
                  <Switch
                    id="edit-contacted"
                    checked={editContacted}
                    onCheckedChange={setEditContacted}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Attendance</Label>
                  <RadioGroup
                    value={editAttendance}
                    onValueChange={(v) =>
                      setEditAttendance(v as AttendanceStatus | "")
                    }
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="attending" id="attending" />
                      <Label
                        htmlFor="attending"
                        className="font-normal cursor-pointer"
                      >
                        Attending
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="maybe_attending"
                        id="maybe_attending"
                      />
                      <Label
                        htmlFor="maybe_attending"
                        className="font-normal cursor-pointer"
                      >
                        Maybe attending
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label
                        htmlFor="no"
                        className="font-normal cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-notes">Notes</Label>
                  <Textarea
                    id="edit-notes"
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Free text…"
                    rows={4}
                    className="resize-none"
                  />
                </div>
                {saveError && (
                  <p className="text-sm text-destructive" role="alert">
                    {saveError}
                  </p>
                )}
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeEdit}
                  disabled={saving}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleSaveEdit}
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Save"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
