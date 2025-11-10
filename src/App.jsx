import Hero from "./components/Hero";
import Features from "./components/Features";
import SummaryBlock from "./components/SummaryBlock";
import CTA from "./components/CTA";

function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.2),transparent_40%)]"
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 antialiased">
      <div className="relative isolate">
        <Background />
        <Hero />
        <SummaryBlock />
        <Features />
        <CTA />
      </div>
    </div>
  );
}
