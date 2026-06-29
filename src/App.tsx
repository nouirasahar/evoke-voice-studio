import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { VoiceStudio } from "@/components/sections/VoiceStudio";
import { Workflow } from "@/components/sections/Workflow";
import { AgentArchitecture } from "@/components/sections/AgentArchitecture";
import { Features } from "@/components/sections/Features";
import { DemoPreview } from "@/components/sections/DemoPreview";

export default function App() {
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
