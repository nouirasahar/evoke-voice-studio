import { Home, BarChart3, Users, Settings, Calendar, Bell } from "lucide-react";

const rows = [
  { id: "#A-1042", patient: "Olivia Park", doctor: "Dr. Mehta", status: "Confirmed", time: "09:30" },
  { id: "#A-1043", patient: "Liam Chen", doctor: "Dr. Akinyi", status: "Pending", time: "10:15" },
  { id: "#A-1044", patient: "Sofia Rivera", doctor: "Dr. Singh", status: "Completed", time: "11:00" },
  { id: "#A-1045", patient: "Noah Becker", doctor: "Dr. Mehta", status: "Confirmed", time: "13:20" },
];

const statusColor: Record<string, string> = {
  Confirmed: "bg-[oklch(0.82_0.16_200)]/15 text-[oklch(0.82_0.16_200)]",
  Pending: "bg-amber-400/15 text-amber-300",
  Completed: "bg-emerald-400/15 text-emerald-300",
};

export function DemoPreview() {
  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-[oklch(0.82_0.16_200)]">LIVE SANDBOX PREVIEW</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">A real app, generated from one sentence</h2>
        </div>

        <div className="glass rounded-3xl p-3 sm:p-4" style={{ boxShadow: "var(--shadow-glow-cyan)" }}>
          {/* Browser chrome */}
          <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 bg-black/30 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>
            <div className="hidden sm:block flex-1 mx-6">
              <div className="mx-auto max-w-md rounded-md bg-white/5 border border-white/10 px-3 py-1 text-center text-xs font-mono text-muted-foreground">
                sandbox.evoke.dev/clinic-dashboard
              </div>
            </div>
            <span className="rounded-md bg-[oklch(0.82_0.16_200)]/15 px-2 py-1 text-[10px] font-mono text-[oklch(0.82_0.16_200)]">
              LIVE
            </span>
          </div>

          {/* App body */}
          <div className="grid grid-cols-12 gap-3 rounded-b-2xl bg-black/20 p-3 sm:p-4">
            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-3 lg:col-span-2 rounded-xl border border-white/10 bg-black/30 p-3">
              <div className="flex items-center gap-2 px-2 py-2 text-xs font-mono text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                clinic.app
              </div>
              <nav className="mt-2 space-y-1 text-sm">
                {[
                  { i: Home, l: "Overview", active: true },
                  { i: Calendar, l: "Appointments" },
                  { i: Users, l: "Patients" },
                  { i: BarChart3, l: "Analytics" },
                  { i: Settings, l: "Settings" },
                ].map(({ i: Icon, l, active }) => (
                  <div
                    key={l}
                    className={
                      "flex items-center gap-2 rounded-lg px-3 py-2 " +
                      (active ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    <Icon className="h-4 w-4" />
                    {l}
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                <div>
                  <div className="text-xs text-muted-foreground">Good morning, Dr. Mehta</div>
                  <div className="text-sm font-semibold">Today's clinic overview</div>
                </div>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { l: "Appointments", v: "128", d: "+12%" },
                  { l: "Patients", v: "2,341", d: "+3%" },
                  { l: "Avg. Wait", v: "8 min", d: "-14%" },
                  { l: "Revenue", v: "$48.2k", d: "+9%" },
                ].map((c) => (
                  <div key={c.l} className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="text-xs text-muted-foreground">{c.l}</div>
                    <div className="mt-1 text-xl font-semibold">{c.v}</div>
                    <div className="mt-1 text-xs text-emerald-300">{c.d}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="text-sm font-semibold">Upcoming appointments</div>
                  <div className="text-xs text-muted-foreground">Today</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-2 font-medium">ID</th>
                        <th className="px-4 py-2 font-medium">Patient</th>
                        <th className="px-4 py-2 font-medium">Doctor</th>
                        <th className="px-4 py-2 font-medium">Time</th>
                        <th className="px-4 py-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r) => (
                        <tr key={r.id} className="border-t border-white/5">
                          <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.id}</td>
                          <td className="px-4 py-3">{r.patient}</td>
                          <td className="px-4 py-3 text-muted-foreground">{r.doctor}</td>
                          <td className="px-4 py-3 font-mono text-xs">{r.time}</td>
                          <td className="px-4 py-3">
                            <span className={"rounded-md px-2 py-1 text-xs " + statusColor[r.status]}>
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
