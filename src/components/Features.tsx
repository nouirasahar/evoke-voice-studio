import { Headphones, Layers, Code2, Container, Repeat, ShieldCheck } from "lucide-react";

const features = [
  { icon: Headphones, title: "Contextual Speech-to-Text", desc: "Domain-aware transcription that understands product, technical, and industry vocabulary." },
  { icon: Layers, title: "Full-Stack Generation", desc: "UI, logic, schema, and runtime produced together as one coherent application." },
  { icon: Code2, title: "DSL Intermediate Representation", desc: "A typed spec layer between voice and code that guarantees agent consistency." },
  { icon: Container, title: "Docker Sandbox", desc: "Every generated app boots into an isolated sandbox for instant live preview." },
  { icon: Repeat, title: "Incremental Voice Updates", desc: "Refine generated apps with follow-up commands without losing state." },
  { icon: ShieldCheck, title: "Self-Healing Build Correction", desc: "Runtime agent detects, diagnoses, and repairs build errors autonomously." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-[oklch(0.82_0.16_200)]">FEATURES</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Engineered for serious AI software delivery</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass relative overflow-hidden rounded-2xl p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-30"
                   style={{ background: "var(--gradient-brand)" }} />
              <f.icon className="h-6 w-6 text-[oklch(0.82_0.16_200)]" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
