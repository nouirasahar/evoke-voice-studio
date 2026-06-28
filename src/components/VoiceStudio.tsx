import { Mic, Send } from "lucide-react";

const examples = [
  "Create a task management app",
  "Build a medical appointment dashboard",
  "Generate an inventory management system",
];

export function VoiceStudio() {
  return (
    <section id="studio" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-[oklch(0.82_0.16_200)]">VOICE STUDIO</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Speak your next product into existence</h2>
        </div>

        <div className="glass rounded-3xl p-8 sm:p-12" style={{ boxShadow: "var(--shadow-glow)" }}>
          {/* Mic */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-pulse-ring"
                   style={{ background: "var(--gradient-brand)", filter: "blur(20px)" }} />
              <button
                className="relative grid h-28 w-28 sm:h-32 sm:w-32 place-items-center rounded-full text-white transition hover:scale-105"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                aria-label="Activate voice"
              >
                <Mic className="h-12 w-12" />
              </button>
            </div>
            <p className="mt-6 text-sm font-mono tracking-wider text-muted-foreground">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[oklch(0.82_0.16_200)] animate-pulse" />
              Ready to listen
            </p>

            {/* Waveform */}
            <div className="mt-6 flex h-14 items-center gap-1">
              {Array.from({ length: 32 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full animate-wave"
                  style={{
                    height: `${20 + (i % 7) * 8}%`,
                    background: "var(--gradient-brand)",
                    animationDelay: `${i * 60}ms`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Transcript */}
          <div className="mt-10">
            <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Transcribed command
            </label>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-foreground/90 min-h-[96px]">
              <span className="text-muted-foreground">{">"} </span>
              Build a medical appointment dashboard with patient records, calendar
              scheduling, and analytics for the clinic team.
              <span className="ml-1 inline-block h-4 w-2 align-middle bg-[oklch(0.82_0.16_200)] animate-pulse" />
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {examples.map((e) => (
                <button
                  key={e}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground hover:bg-white/10"
                >
                  {e}
                </button>
              ))}
            </div>
            <button
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              Generate Application
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
