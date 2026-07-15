"use client";

import { FormEvent, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface FormErrors {
  email?: string;
  password?: string;
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!validateEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (password.length < 8) nextErrors.password = "Password must be at least 8 characters.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    // Placeholder — no auth backend wired up yet in this draft. Swap for the
    // real auth call (and loading/redirect handling) before this ships.
    setStatus("submitting");
    setTimeout(() => setStatus("error"), 600);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-paper px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-2xl border border-brand-mist bg-white p-8 shadow-sm">
          <h1 className="text-lg font-semibold text-brand-ink">Sign in</h1>
          <p className="mt-1 text-sm text-brand-muted">Access your Elynox workspace.</p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              autoComplete="email"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              autoComplete="current-password"
            />

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                Auth isn&apos;t wired up in this draft yet — this is a UI-only placeholder.
              </p>
            )}

            <Button type="submit" disabled={status === "submitting"} className="mt-2 w-full">
              {status === "submitting" ? "Signing in…" : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
