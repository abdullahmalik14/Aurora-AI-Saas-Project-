import { Zap, FileText, Users, Plug } from 'lucide-react'
import Button from '../shared/Button'

const actions = [
  { label: 'New Automation', icon: Zap, variant: 'primary' },
  { label: 'Generate Report', icon: FileText, variant: 'secondary' },
  { label: 'Invite Team Member', icon: Users, variant: 'secondary' },
  { label: 'Add Integration', icon: Plug, variant: 'secondary' },
]

export default function QuickActions() {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="text-sm font-semibold text-zinc-900 mb-4">Quick Actions</h3>
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Button
              key={action.label}
              variant={action.variant}
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Icon className="h-4 w-4" />
              {action.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
