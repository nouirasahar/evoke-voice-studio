import { Mic2, FileText, Brain, Boxes, MonitorPlay } from "lucide-react";

const steps = [
  { icon: Mic2, title: "Voice Command", desc: "Capture spoken intent through the studio mic." },
  { icon: FileText, title: "Speech-to-Text", desc: "Context-aware transcription with domain vocab." },
  { icon: Brain, title: "Intent Analysis", desc: "Parse semantics into a structured product brief." },
  { icon: Boxes, title: "Multi-Agent Generation", desc: "Specialist agents compose the full stack." },
  { icon: MonitorPlay, title: "Sandbox Preview", desc: "Run the result instantly in a Docker sandbox." },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-[oklch(0.82_0.16_200)]">WORKFLOW</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">From utterance to running app in five steps</h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-5">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden md:block h-px"
               style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.15), transparent)" }} />
          {steps.map((s, i) => (
            <div key={s.title} className="relative glass rounded-2xl p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl"
                   style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="mt-4 text-xs font-mono text-muted-foreground">STEP {i + 1}</div>
              <h3 className="mt-1 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
