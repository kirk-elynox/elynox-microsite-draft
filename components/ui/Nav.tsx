import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/login", label: "Login" },
];

export function Nav() {
  return (
    <header className="border-b border-white/10 bg-brand-night">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo dark />
        </Link>
        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="secondary">Get Started</Button>
      </div>
    </header>
  );
}
