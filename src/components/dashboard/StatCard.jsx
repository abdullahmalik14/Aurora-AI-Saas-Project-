import {
  Zap,
  FolderKanban,
  Users,
  Activity,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import CountUp from '../shared/CountUp'

const iconMap = { Zap, FolderKanban, Users, Activity }

export default function StatCard({ label, value, change, trend, icon, suffix = '' }) {
  const Icon = iconMap[icon] || Activity
  const isUp = trend === 'up'
  const isDown = trend === 'down'

  return (
    <div className="rounded-xl border border-border bg-white p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-zinc-500">{label}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="text-2xl font-bold text-zinc-900">
        <CountUp end={value} suffix={suffix} />
      </div>
      {change && (
        <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${isUp ? 'text-emerald-600' : isDown ? 'text-red-500' : 'text-zinc-500'}`}>
          {isUp && <TrendingUp className="h-3 w-3" />}
          {isDown && <TrendingDown className="h-3 w-3" />}
          {change} {trend === 'neutral' ? 'of limit' : 'this month'}
        </div>
      )}
    </div>
  )
}
