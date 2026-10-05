import { COMPANY_STATS } from "@/lib/config";

export default function TrustStats() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {COMPANY_STATS.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm">
            <p className="font-serif text-3xl font-semibold text-brand-blue">{stat.value}</p>
            <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-neutral-400">
        Placeholder figures — replace with verified business data before launch.
      </p>
    </div>
  );
}
