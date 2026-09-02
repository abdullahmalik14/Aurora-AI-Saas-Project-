import { logoCompanies } from '../../data/mockData'

export default function LogoMarquee() {
  const logos = [...logoCompanies, ...logoCompanies]

  return (
    <section className="py-12 border-y border-border bg-surface-muted/50 overflow-hidden">
      <p className="text-center text-sm font-medium text-text-muted mb-8">
        Trusted by teams at innovative companies
      </p>
      <div className="relative">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {logos.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex items-center gap-2 text-zinc-400 font-semibold text-lg shrink-0 opacity-60 grayscale"
            >
              <div className="h-8 w-8 rounded-lg bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">
                {company.charAt(0)}
              </div>
              {company}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
