import { motion } from 'framer-motion'
import { Link2, BarChart3, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Link2,
    title: 'Connect',
    description: 'Link your data sources, CRM, and tools in minutes with our one-click integrations.',
  },
  {
    icon: BarChart3,
    title: 'Analyze',
    description: 'AI models process your data and surface insights, trends, and anomalies automatically.',
  },
  {
    icon: Rocket,
    title: 'Act',
    description: 'Build automations that turn insights into action — emails, alerts, workflows, and more.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-surface-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600"
          >
            Get up and running in three simple steps
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-primary via-violet-500 to-accent origin-left"
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-primary shadow-lg shadow-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
