import { Check, X } from 'lucide-react'
import { pricingComparison } from '../../data/mockData'

export default function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-muted/50">
            <th className="text-left px-6 py-4 font-semibold text-zinc-900">Feature</th>
            <th className="text-center px-6 py-4 font-semibold text-zinc-900">Starter</th>
            <th className="text-center px-6 py-4 font-semibold text-primary">Pro</th>
            <th className="text-center px-6 py-4 font-semibold text-zinc-900">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {pricingComparison.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-muted/30'}>
              <td className="px-6 py-4 text-zinc-700 font-medium">{row.feature}</td>
              {['starter', 'pro', 'enterprise'].map((plan) => (
                <td key={plan} className="px-6 py-4 text-center">
                  {typeof row[plan] === 'boolean' ? (
                    row[plan] ? (
                      <Check className="h-5 w-5 text-accent mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-zinc-300 mx-auto" />
                    )
                  ) : (
                    <span className="text-zinc-600">{row[plan]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
