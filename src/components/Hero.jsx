import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16 text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
        <Rocket className="h-4 w-4 text-indigo-400" />
        <span>Introducing Nexa Manager</span>
      </div>

      <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
        Your Business Command Center: Manage It All, Simply.
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
        A single, streamlined workspace to run invoices, expenses, clients, projects, and inventory—so your team moves faster with fewer tools.
      </p>
    </section>
  );
}
