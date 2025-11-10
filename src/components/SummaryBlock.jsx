export default function SummaryBlock() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-6 text-white/90">
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm leading-6">
          <span className="font-semibold text-white">Slogan/Headline:</span> Your Business Command Center: Manage It All, Simply.
        </p>
        <p className="mt-3 text-sm leading-6">
          <span className="font-semibold text-white">Overview/Value Proposition:</span> Nexa Manager unifies invoices, expenses, clients, projects, and inventory in one intuitive hub so teams streamline operations, cut tool sprawl, and make faster decisions.
        </p>
        <div className="mt-3">
          <p className="font-semibold text-white">Top 4 Features:</p>
          <ul className="mt-1 list-disc pl-6 text-sm">
            <li>Invoices and Expenses automation with smart approvals</li>
            <li>Clients and Projects tracking with real-time status</li>
            <li>Inventory control with alerts and insights</li>
            <li>AI-powered OCR, mobile offline access, and 7-language support</li>
          </ul>
        </div>
        <p className="mt-3 text-sm leading-6">
          <span className="font-semibold text-white">Call to Action (CTA):</span> Start your 14-day Free Trial (No credit card). Starter $39/month, Professional $99/month.
        </p>
      </div>
    </section>
  );
}
