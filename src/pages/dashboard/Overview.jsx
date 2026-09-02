import StatCard from '../../components/dashboard/StatCard'
import UsageChart from '../../components/dashboard/UsageChart'
import ActivityFeed from '../../components/dashboard/ActivityFeed'
import QuickActions from '../../components/dashboard/QuickActions'
import { overviewStats } from '../../data/mockData'

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {overviewStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <UsageChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <QuickActions />
      </div>
    </div>
  )
}
