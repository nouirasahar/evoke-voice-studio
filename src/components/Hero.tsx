import { ArrowRight, AudioLines, Cpu } from "lucide-react";
import logoAsset from "@/assets/evoke-logo.png.asset.json";

export function Hero() {
  return (
    <section id="vision" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
             style={{ background: "radial-gradient(closest-side, oklch(0.66 0.25 300 / 0.35), transparent)" }} />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full blur-3xl"
             style={{ background: "radial-gradient(closest-side, oklch(0.82 0.16 200 / 0.25), transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.16_200)] animate-pulse" />
          Multi-Agent Voice Engineering Platform
        </div>

        <img
          src={logoAsset.url}
          alt="EVOKE logo"
          width={220}
          height={220}
          className="mx-auto mb-6 h-40 w-40 sm:h-52 sm:w-52 rounded-2xl animate-float-slow"
          style={{ filter: "drop-shadow(0 0 60px rgba(139,92,246,0.55))" }}
        />

        <h1 className="font-display text-6xl sm:text-8xl font-bold tracking-tight">
          <span className="text-gradient">EVOKE</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base font-mono tracking-[0.4em] text-muted-foreground">
          SPEAK. EVOKE. BUILD.
        </p>

        <h2 className="mx-auto mt-10 max-w-3xl text-3xl sm:text-5xl font-semibold leading-tight text-foreground">
          Transform voice into{" "}
          <span className="text-gradient">software.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
          EVOKE is an intelligent multi-agent platform that converts spoken ideas
          into structured full-stack applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#studio"
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            <AudioLines className="h-4 w-4" />
            Start Voice Generation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#agents"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5"
          >
            <Cpu className="h-4 w-4" />
            Explore Architecture
          </a>
        </div>
      </div>
    </section>
  );
}
