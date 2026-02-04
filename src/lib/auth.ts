const STORAGE_KEY = "dashboard_auth_email";

const ALLOWED_EMAILS = [
  "rupak@wiseadmit.io",
  "rupesh@wiseadmit.io",
  "sanju@wiseadmit.io",
  "swornima@wiseadmit.io",
  "suprem@wiseadmit.io",
  "nirmal@wiseadmit.io",
  "sobiya@wiseadmit.io",
].map((e) => e.toLowerCase());

export function isAllowedEmail(email: string): boolean {
  return ALLOWED_EMAILS.includes(email.trim().toLowerCase());
}

export function setAuthEmail(email: string): void {
  const normalized = email.trim().toLowerCase();
  if (isAllowedEmail(normalized)) {
    localStorage.setItem(STORAGE_KEY, normalized);
  }
}

export function getAuthEmail(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function isAuthenticated(): boolean {
  const email = getAuthEmail();
  return email !== null && isAllowedEmail(email);
}

export function logout(): void {
  localStorage.removeItem(STORAGE_KEY);
}
