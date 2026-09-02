import { useState } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { ArrowUpDown } from 'lucide-react'
import { analyticsChartData, analyticsTableData } from '../../data/mockData'
import Badge from '../../components/shared/Badge'

export default function Analytics() {
  const [sortField, setSortField] = useState('metric')
  const [sortDir, setSortDir] = useState('asc')

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDir('asc')
    }
  }

  const sortedData = [...analyticsTableData].sort((a, b) => {
    const aVal = a[sortField]
    const bVal = b[sortField]
    if (typeof aVal === 'string') {
      return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }
    return sortDir === 'asc' ? aVal - bVal : bVal - aVal
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <select className="rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
        <select className="rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
          <option>All Categories</option>
          <option>Traffic</option>
          <option>Engagement</option>
          <option>Revenue</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-white p-5">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4">Revenue & Users</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={analyticsChartData.line}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', fontSize: '12px' }} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} dot={false} animationDuration={800} />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} dot={false} animationDuration={800} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-border bg-white p-5">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4">Channel Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={analyticsChartData.bar}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
              <XAxis dataKey="category" tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', fontSize: '12px' }} />
              <Legend />
              <Bar dataKey="sent" fill="#4f46e5" radius={[4, 4, 0, 0]} animationDuration={800} />
              <Bar dataKey="opened" fill="#7c3aed" radius={[4, 4, 0, 0]} animationDuration={800} />
              <Bar dataKey="clicked" fill="#10b981" radius={[4, 4, 0, 0]} animationDuration={800} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-border bg-white p-5 lg:col-span-1">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4">Usage Breakdown</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={analyticsChartData.pie}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
                animationDuration={800}
              >
                {analyticsChartData.pie.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', fontSize: '12px' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-border bg-white lg:col-span-2 overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-sm font-semibold text-zinc-900">Metrics Table</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-muted/50">
                  {[
                    { key: 'metric', label: 'Metric' },
                    { key: 'value', label: 'Value' },
                    { key: 'change', label: 'Change' },
                    { key: 'category', label: 'Category' },
                  ].map((col) => (
                    <th
                      key={col.key}
                      className="text-left px-5 py-3 font-medium text-zinc-500 cursor-pointer hover:text-zinc-900"
                      onClick={() => handleSort(col.key)}
                    >
                      <span className="inline-flex items-center gap-1">
                        {col.label}
                        <ArrowUpDown className="h-3 w-3" />
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row) => (
                  <tr key={row.id} className="border-b border-border hover:bg-surface-muted/30">
                    <td className="px-5 py-3 font-medium text-zinc-900">{row.metric}</td>
                    <td className="px-5 py-3 text-zinc-600">{row.value}</td>
                    <td className="px-5 py-3">
                      <span className={row.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}>
                        {row.change}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <Badge variant="primary">{row.category}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
