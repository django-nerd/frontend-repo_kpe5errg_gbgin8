import { Smartphone, ScanLine, Languages, ShieldCheck, FileSpreadsheet, Wallet, Users, Boxes } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80">
    <div className="mb-3 inline-flex items-center gap-2 text-white">
      <Icon className="h-5 w-5 text-indigo-400" />
      <span className="font-medium">{title}</span>
    </div>
    <p className="text-sm text-white/70">{description}</p>
  </div>
);

export default function Features() {
  const coreModules = [
    { icon: FileSpreadsheet, title: "Invoices", description: "Send branded invoices, automate reminders, and get paid faster." },
    { icon: Wallet, title: "Expenses", description: "Track receipts, categorize spend, and control budgets in real time." },
    { icon: Users, title: "Clients", description: "Centralize contacts, billing profiles, and account history." },
    { icon: Boxes, title: "Projects & Inventory", description: "Plan work, assign tasks, and track stock in one place." },
  ];

  const differentiators = [
    { icon: Smartphone, title: "Mobile Apps + Offline", description: "Keep working without signal; sync when you're back online." },
    { icon: ScanLine, title: "AI OCR Scanning", description: "Snap receipts and documents—data is extracted automatically." },
    { icon: Languages, title: "Multi‑Language (7)", description: "Work globally with localized UI and formats." },
    { icon: ShieldCheck, title: "Enterprise‑grade Security", description: "SOC 2 Type II and GDPR compliance by design." },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-10 text-white">
      <h2 className="mb-4 text-center text-2xl font-semibold">What You Get</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {coreModules.map((m) => (
          <FeatureItem key={m.title} {...m} />
        ))}
      </div>

      <h3 className="mt-10 mb-4 text-center text-xl font-semibold">Why Teams Choose Nexa</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {differentiators.map((d) => (
          <FeatureItem key={d.title} {...d} />
        ))}
      </div>
    </section>
  );
}
