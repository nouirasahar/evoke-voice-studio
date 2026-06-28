import { Mic, Brain, LayoutDashboard, Cog, Database, Server } from "lucide-react";

const agents = [
  { icon: Mic, name: "Speech Agent", role: "Streams audio, denoises, and produces high-accuracy transcripts in real time." },
  { icon: Brain, name: "Intent Agent", role: "Resolves ambiguity and converts the user request into a structured DSL spec." },
  { icon: LayoutDashboard, name: "UI Agent", role: "Designs layouts, components, and theming aligned with the product domain." },
  { icon: Cog, name: "Logic Agent", role: "Generates business logic, state machines, and validation rules." },
  { icon: Database, name: "Schema Agent", role: "Models entities, relations, and migrations from inferred data needs." },
  { icon: Server, name: "Runtime Agent", role: "Builds, sandboxes, and self-heals the application until it runs clean." },
];

export function AgentArchitecture() {
  return (
    <section id="agents" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-[oklch(0.82_0.16_200)]">MULTI-AGENT ARCHITECTURE</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            Six specialists. <span className="text-gradient">One orchestrated build.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <div key={a.name} className="glass group rounded-2xl p-6 transition hover:translate-y-[-2px]">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10"
                     style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 270), oklch(0.18 0.04 270))" }}>
                  <a.icon className="h-5 w-5 text-[oklch(0.82_0.16_200)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{a.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.role}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.16_200)]" />
                agent.online
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
