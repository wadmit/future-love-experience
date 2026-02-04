import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isAllowedEmail, setAuthEmail } from "@/lib/auth";

function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email.");
      return;
    }
    if (!isAllowedEmail(trimmed)) {
      setError("This email is not authorized to access the dashboard.");
      return;
    }
    setAuthEmail(trimmed);
    navigate(redirectTo, { replace: true });
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Dashboard login</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your email to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@wiseadmit.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full"
            />
          </div>
          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>

        <p className="text-center">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to site
          </a>
        </p>
      </div>
    </main>
  );
}

export default Login;
