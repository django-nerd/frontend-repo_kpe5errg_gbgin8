import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/30 to-fuchsia-600/30 p-6 text-white backdrop-blur sm:flex-row">
        <div>
          <h4 className="text-lg font-semibold">Try Nexa Manager Free</h4>
          <p className="text-sm text-white/80">14-day free trial • No credit card • Starter $39/mo • Professional $99/mo</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:opacity-90"
        >
          Start Free Trial
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
