import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Building2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getAuthEmail } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MAX_ROWS = 50000;

type CollegeRow = { id: string | number; college: string | null };

function Colleges() {
  const query = useQuery({
    queryKey: ["registrations-colleges"],
    enabled: !!supabase,
    queryFn: async () => {
      const res = await supabase!
        .from("registrations")
        .select("id, college")
        .range(0, MAX_ROWS - 1);
      if (res.error) throw new Error(res.error.message);
      return (res.data ?? []) as CollegeRow[];
    },
    staleTime: 10_000,
  });

  const collegeCounts = useMemo(() => {
    const rows = query.data ?? [];
    const map = new Map<string, number>();
    for (const r of rows) {
      const name = (r.college ?? "").trim() || "Not specified";
      map.set(name, (map.get(name) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .map(([college, count]) => ({ college, count }))
      .sort((a, b) => b.count - a.count || a.college.localeCompare(b.college));
  }, [query.data]);

  const totalRegistrations = useMemo(
    () => collegeCounts.reduce((sum, { count }) => sum + count, 0),
    [collegeCounts]
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="container-wide px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <Button asChild variant="ghost" size="sm" className="-ml-2">
                    <Link to="/dashboard">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Dashboard
                    </Link>
                  </Button>
                  <Badge variant="secondary">Colleges</Badge>
                  <span className="text-xs text-muted-foreground">
                    {getAuthEmail()}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2 mt-2">
                  <Building2 className="w-8 h-8 text-primary" />
                  Registrations by college
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">
                    {collegeCounts.length}
                  </span>{" "}
                  college{collegeCounts.length !== 1 ? "s" : ""} ·{" "}
                  <span className="font-medium text-foreground">
                    {totalRegistrations}
                  </span>{" "}
                  total registration{totalRegistrations !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {query.isError && (
              <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
                <p className="font-semibold text-foreground">
                  Couldn’t load registrations
                </p>
                <p className="text-muted-foreground mt-1">
                  {(query.error as Error)?.message}
                </p>
              </div>
            )}

            <div className="rounded-xl border border-border overflow-hidden bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>College</TableHead>
                    <TableHead className="text-right w-32">Total people</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {query.isLoading ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-muted-foreground">
                        Loading…
                      </TableCell>
                    </TableRow>
                  ) : collegeCounts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-muted-foreground">
                        No registrations yet.
                      </TableCell>
                    </TableRow>
                  ) : (
                    collegeCounts.map(({ college, count }, index) => (
                      <TableRow key={college}>
                        <TableCell className="text-muted-foreground font-mono text-sm">
                          {index + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                          {college}
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary">{count}</Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Colleges;
