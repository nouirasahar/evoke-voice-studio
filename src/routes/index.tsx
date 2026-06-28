import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VoiceStudio } from "@/components/VoiceStudio";
import { Workflow } from "@/components/Workflow";
import { AgentArchitecture } from "@/components/AgentArchitecture";
import { Features } from "@/components/Features";
import { DemoPreview } from "@/components/DemoPreview";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EVOKE — Voice to software. Instantly." },
      { name: "description", content: "EVOKE is a voice-driven multi-agent AI platform that turns spoken ideas into structured, full-stack applications." },
      { property: "og:title", content: "EVOKE — Voice to software. Instantly." },
      { property: "og:description", content: "Speak. Evoke. Build. A multi-agent platform that converts voice into running software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <VoiceStudio />
        <Workflow />
        <AgentArchitecture />
        <Features />
        <DemoPreview />
      </main>
      <Footer />
    </div>
  );
}
