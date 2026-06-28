import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#workflow", label: "Workflow" },
  { href: "#agents", label: "Agents" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#vision" className="flex items-center gap-2">
            <Logo className="h-9 w-9" showWordmark />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#studio"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              <Sparkles className="h-4 w-4" />
              Launch Studio
            </a>
            <button
              className="md:hidden rounded-lg p-2 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#studio"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Sparkles className="h-4 w-4" /> Launch Studio
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
