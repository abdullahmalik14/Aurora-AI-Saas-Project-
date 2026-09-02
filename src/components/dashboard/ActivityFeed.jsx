import {
  Zap,
  FolderKanban,
  UserPlus,
  Link,
  FileText,
  CreditCard,
} from 'lucide-react'
import { recentActivity } from '../../data/mockData'

const iconMap = { Zap, FolderKanban, UserPlus, Link, FileText, CreditCard }

export default function ActivityFeed() {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="text-sm font-semibold text-zinc-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivity.map((activity) => {
          const Icon = iconMap[activity.icon] || Zap
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-muted shrink-0">
                <Icon className="h-4 w-4 text-zinc-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-zinc-700">{activity.message}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
