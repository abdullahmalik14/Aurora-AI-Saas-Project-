import { useState } from 'react'
import { CreditCard, Download, AlertTriangle } from 'lucide-react'
import { usageMeters, invoices } from '../../data/mockData'
import { PricingCards } from '../../components/marketing/PricingCards'
import Badge from '../../components/shared/Badge'
import Button from '../../components/shared/Button'
import Modal from '../../components/shared/Modal'

function UsageMeter({ label, used, limit, unit }) {
  const percentage = (used / limit) * 100
  const color = percentage >= 90 ? 'bg-red-500' : percentage >= 75 ? 'bg-amber-500' : 'bg-primary'

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-medium text-zinc-700">{label}</span>
        <span className="text-zinc-500">
          {typeof used === 'number' && used % 1 !== 0 ? used.toFixed(1) : used.toLocaleString()} / {limit.toLocaleString()} {unit}
        </span>
      </div>
      <div className="h-2 rounded-full bg-surface-muted overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {percentage >= 90 && (
        <div className="flex items-center gap-1 mt-1.5 text-xs text-red-500">
          <AlertTriangle className="h-3 w-3" />
          Approaching limit
        </div>
      )}
    </div>
  )
}

export default function Billing() {
  const [showPlanModal, setShowPlanModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan)
    setShowPlanModal(true)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">Pro Plan</h3>
              <p className="text-sm text-zinc-500 mt-1">Your current active subscription</p>
            </div>
            <Badge variant="success">Active</Badge>
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-zinc-900">$79</span>
            <span className="text-sm text-zinc-500">/month</span>
          </div>
          <p className="text-sm text-zinc-500 mb-6">Renews on August 1, 2024</p>
          <div className="flex gap-3">
            <Button variant="primary" size="sm">Upgrade Plan</Button>
            <Button variant="secondary" size="sm">Cancel Subscription</Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-6">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Usage This Month</h3>
          <div className="space-y-5">
            {usageMeters.map((meter) => (
              <UsageMeter key={meter.label} {...meter} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-900 mb-6">Change Plan</h3>
        <PricingCards showAllLink={false} currentPlan="pro" onSelectPlan={handleSelectPlan} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-white p-6">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Payment Method</h3>
          <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-muted/30 mb-4">
            <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-white border border-border">
              <CreditCard className="h-5 w-5 text-zinc-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-900">Visa ending in 4242</div>
              <div className="text-xs text-zinc-500">Expires 12/2026</div>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={() => setShowPaymentModal(true)}>
            Update Payment Method
          </Button>
        </div>

        <div className="rounded-xl border border-border bg-white p-6">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Billing Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">Pro Plan (monthly)</span>
              <span className="font-medium text-zinc-900">$79.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Additional API calls</span>
              <span className="font-medium text-zinc-900">$0.00</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-semibold text-zinc-900">Total</span>
              <span className="font-bold text-zinc-900">$79.00/mo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-zinc-900">Billing History</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted/50">
              <th className="text-left px-6 py-3 font-medium text-zinc-500">Invoice</th>
              <th className="text-left px-6 py-3 font-medium text-zinc-500">Date</th>
              <th className="text-left px-6 py-3 font-medium text-zinc-500">Amount</th>
              <th className="text-left px-6 py-3 font-medium text-zinc-500">Status</th>
              <th className="text-right px-6 py-3 font-medium text-zinc-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-border hover:bg-surface-muted/30">
                <td className="px-6 py-3 font-medium text-zinc-900">{invoice.id}</td>
                <td className="px-6 py-3 text-zinc-600">{invoice.date}</td>
                <td className="px-6 py-3 text-zinc-600">{invoice.amount}</td>
                <td className="px-6 py-3">
                  <Badge variant="success">{invoice.status}</Badge>
                </td>
                <td className="px-6 py-3 text-right">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={showPlanModal}
        onClose={() => setShowPlanModal(false)}
        title={`Switch to ${selectedPlan?.name}?`}
      >
        <p className="text-sm text-zinc-600 mb-6">
          Your plan will be changed to <strong>{selectedPlan?.name}</strong> at{' '}
          <strong>${selectedPlan?.monthlyPrice}/month</strong>. The change takes effect immediately.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setShowPlanModal(false)}>Cancel</Button>
          <Button onClick={() => setShowPlanModal(false)}>Confirm Switch</Button>
        </div>
      </Modal>

      <Modal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} title="Update Payment Method">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Card Number</label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>Cancel</Button>
            <Button onClick={() => setShowPaymentModal(false)}>Save Card</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
