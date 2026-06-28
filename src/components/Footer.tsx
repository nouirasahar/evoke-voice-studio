import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20 pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
            <div className="font-display text-2xl font-semibold tracking-[0.25em] text-gradient">EVOKE</div>
            <p className="mt-2 text-sm text-muted-foreground">Voice to software. Instantly.</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <a href="#vision" className="hover:text-foreground">Vision</a>
            <a href="#workflow" className="hover:text-foreground">Workflow</a>
            <a href="#agents" className="hover:text-foreground">Agents</a>
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#demo" className="hover:text-foreground">Demo</a>
          </div>
          <div className="mt-6 text-xs font-mono text-muted-foreground/60">
            © {new Date().getFullYear()} EVOKE — evoke-application
          </div>
        </div>
      </div>
    </footer>
  );
}
