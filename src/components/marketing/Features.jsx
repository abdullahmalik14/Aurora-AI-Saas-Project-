import { motion } from 'framer-motion'
import {
  Brain,
  BarChart3,
  Users,
  Workflow,
  Plug,
  Shield,
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Insights',
    description: 'Machine learning models analyze your data and surface actionable recommendations automatically.',
    size: 'large',
    gradient: 'from-primary/10 to-violet-500/10',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Live dashboards with customizable metrics and drill-down capabilities.',
    size: 'small',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Shared workspaces, comments, and role-based access for your entire team.',
    size: 'small',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    description: 'Build powerful no-code automations with triggers, conditions, and multi-step actions.',
    size: 'large',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    icon: Plug,
    title: 'Integrations',
    description: 'Connect 50+ tools including Slack, Salesforce, and Google Analytics.',
    size: 'small',
    gradient: 'from-pink-500/10 to-rose-500/10',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with AES-256 encryption, SSO, and audit logs.',
    size: 'small',
    gradient: 'from-zinc-500/10 to-zinc-600/10',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900"
          >
            Everything you need to{' '}
            <span className="gradient-text">automate smarter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600"
          >
            A complete platform for analytics, automation, and team collaboration — built for modern businesses.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            const isLarge = feature.size === 'large'
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl border border-border bg-white p-6 sm:p-8 transition-shadow hover:shadow-lg hover:shadow-primary/5 ${
                  isLarge ? 'md:col-span-1 lg:row-span-1' : ''
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
