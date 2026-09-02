import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Zap, FileText } from 'lucide-react'

const views = [
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    content: {
      title: 'Analytics Dashboard',
      stats: [
        { label: 'Revenue', value: '$92.4K', change: '+22%' },
        { label: 'Users', value: '4,600', change: '+15%' },
        { label: 'Conversion', value: '3.8%', change: '+0.6%' },
      ],
      chartBars: [65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92],
    },
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: Zap,
    content: {
      title: 'Automation Workflows',
      stats: [
        { label: 'Active', value: '45', change: '+5' },
        { label: 'Runs Today', value: '1,247', change: '+18%' },
        { label: 'Success Rate', value: '99.2%', change: '+0.3%' },
      ],
      chartBars: [90, 85, 92, 88, 95, 91, 97, 93, 96, 94, 98, 99],
    },
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    content: {
      title: 'Reports & Exports',
      stats: [
        { label: 'Generated', value: '156', change: '+12' },
        { label: 'Scheduled', value: '8', change: '+2' },
        { label: 'Shared', value: '42', change: '+8' },
      ],
      chartBars: [30, 45, 35, 50, 40, 55, 48, 60, 52, 58, 65, 70],
    },
  },
]

export default function ProductDemo() {
  const [activeView, setActiveView] = useState('analytics')
  const current = views.find((v) => v.id === activeView)

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900"
          >
            See Aurora AI in action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600"
          >
            Explore the dashboard views that power your business
          </motion.p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {views.map((view) => {
            const Icon = view.icon
            return (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeView === view.id
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-white text-zinc-600 border border-border hover:bg-surface-muted'
                }`}
              >
                <Icon className="h-4 w-4" />
                {view.label}
              </button>
            )
          })}
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto text-xs text-zinc-400">app.auroraai.com/{activeView}</div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-6">{current.content.title}</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {current.content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-zinc-100 p-4">
                    <div className="text-xs text-zinc-500 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                    <div className="text-xs text-emerald-600 font-medium mt-1">{stat.change}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-zinc-100 p-4">
                <div className="text-xs font-medium text-zinc-500 mb-4">Performance Overview</div>
                <div className="flex items-end gap-2 h-32">
                  {current.content.chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary-light"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
