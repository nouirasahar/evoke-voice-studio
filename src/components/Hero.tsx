import { ArrowRight, AudioLines, Cpu } from "lucide-react";
import logoAsset from "@/assets/evoke-logo.png.asset.json";

export function Hero() {
  return (
    <section id="vision" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Drifting glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-3xl animate-orb-drift"
             style={{ background: "radial-gradient(closest-side, oklch(0.66 0.25 300 / 0.45), transparent)" }} />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full blur-3xl animate-orb-drift"
             style={{ background: "radial-gradient(closest-side, oklch(0.82 0.16 200 / 0.3), transparent)", animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full blur-3xl animate-orb-drift"
             style={{ background: "radial-gradient(closest-side, oklch(0.68 0.2 245 / 0.28), transparent)", animationDelay: "-12s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.82_0.16_200)] animate-ping-soft" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.16_200)]" />
          </span>
          Multi-Agent Voice Engineering Platform
        </div>

        {/* Logo with rotating ring */}
        <div className="relative mx-auto mb-6 h-44 w-44 sm:h-56 sm:w-56">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow opacity-60"
            style={{
              background: "conic-gradient(from 0deg, transparent, oklch(0.66 0.25 300 / 0.6), transparent 30%, oklch(0.82 0.16 200 / 0.6), transparent 70%)",
              filter: "blur(18px)",
            }}
          />
          <img
            src={logoAsset.url}
            alt="EVOKE logo"
            width={224}
            height={224}
            className="relative h-full w-full object-contain animate-float-slow"
            style={{ filter: "drop-shadow(0 0 50px rgba(139,92,246,0.6))" }}
          />
        </div>

        <h1 className="font-display text-6xl sm:text-8xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "120ms" }}>
          <span className="text-shimmer">EVOKE</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base font-mono tracking-[0.4em] text-muted-foreground animate-fade-up" style={{ animationDelay: "220ms" }}>
          SPEAK. EVOKE. BUILD.
        </p>

        <h2 className="mx-auto mt-10 max-w-3xl text-3xl sm:text-5xl font-semibold leading-tight text-foreground animate-fade-up" style={{ animationDelay: "320ms" }}>
          Transform voice into{" "}
          <span className="text-shimmer">software.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "420ms" }}>
          EVOKE is an intelligent multi-agent platform that converts spoken ideas
          into structured full-stack applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "520ms" }}>
          <a
            href="#studio"
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:opacity-95"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            <AudioLines className="h-4 w-4" />
            Start Voice Generation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#agents"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground transition hover:scale-[1.03] hover:bg-white/5"
          >
            <Cpu className="h-4 w-4" />
            Explore Architecture
          </a>
        </div>
      </div>
    </section>
  );
}
