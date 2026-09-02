import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { usageChartData } from '../../data/mockData'

export default function UsageChart() {
  const [range, setRange] = useState('7d')
  const data = usageChartData[range]

  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">Usage Trends</h3>
          <p className="text-xs text-zinc-500 mt-0.5">API calls and automation runs</p>
        </div>
        <div className="flex rounded-lg border border-border overflow-hidden">
          {['7d', '30d', '90d'].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                range === r
                  ? 'bg-primary text-white'
                  : 'bg-white text-zinc-600 hover:bg-surface-muted'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #e4e4e7',
              fontSize: '12px',
            }}
          />
          <Area
            type="monotone"
            dataKey="usage"
            stroke="#4f46e5"
            strokeWidth={2}
            fill="url(#usageGradient)"
            animationDuration={800}
          />
          <Area
            type="monotone"
            dataKey="automations"
            stroke="#10b981"
            strokeWidth={2}
            fill="none"
            animationDuration={800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
