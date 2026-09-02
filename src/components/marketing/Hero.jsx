import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import Button from '../shared/Button'

function MockDashboard() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative mx-auto max-w-4xl"
    >
      <div className="rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
        <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="mx-auto flex-1 max-w-xs rounded-md bg-white px-3 py-1 text-xs text-zinc-400 text-center border border-zinc-200">
            app.auroraai.com/dashboard
          </div>
        </div>
        <div className="flex">
          <div className="hidden sm:block w-48 border-r border-zinc-100 bg-zinc-50 p-4 space-y-3">
            {['Overview', 'Analytics', 'Automations', 'Projects'].map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-3 py-2 text-xs font-medium ${i === 0 ? 'bg-primary/10 text-primary' : 'text-zinc-500'}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Automations', value: '12,847', color: 'bg-primary/10 text-primary' },
                { label: 'Projects', value: '24', color: 'bg-emerald-50 text-emerald-600' },
                { label: 'Team', value: '18', color: 'bg-blue-50 text-blue-600' },
                { label: 'Usage', value: '84%', color: 'bg-violet-50 text-violet-600' },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-lg p-3 ${stat.color}`}>
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-[10px] opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-zinc-100 p-4">
              <div className="text-xs font-medium text-zinc-500 mb-3">Usage Trends</div>
              <div className="flex items-end gap-1 h-24">
                {[40, 55, 45, 70, 60, 80, 90, 75, 95, 85, 100, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary-light opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 via-violet-500/20 to-blue-500/20 blur-2xl" />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/10 via-violet-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            AI-Powered Analytics & Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]"
          >
            Turn data into action with{' '}
            <span className="gradient-text">intelligent automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed"
          >
            Aurora AI helps teams connect their data, uncover actionable insights, and automate
            workflows — so you can focus on what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/signup">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <MockDashboard />
        </motion.div>
      </div>
    </section>
  )
}
