import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '../../data/mockData'
import Button from '../shared/Button'

export function PricingCards({ showAllLink = true, currentPlan = null, onSelectPlan = null }) {
  const [yearly, setYearly] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className={`text-sm font-medium ${!yearly ? 'text-zinc-900' : 'text-zinc-500'}`}>
          Monthly
        </span>
        <button
          onClick={() => setYearly(!yearly)}
          className={`relative h-7 w-12 rounded-full transition-colors ${yearly ? 'bg-primary' : 'bg-zinc-200'}`}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm"
            animate={{ x: yearly ? 22 : 2 }}
          />
        </button>
        <span className={`text-sm font-medium ${yearly ? 'text-zinc-900' : 'text-zinc-500'}`}>
          Yearly
        </span>
        {yearly && (
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            Save 17%
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pricingPlans.map((plan, i) => {
          const price = yearly ? plan.yearlyPrice : plan.monthlyPrice
          const isCurrent = currentPlan === plan.id
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border p-6 sm:p-8 ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10 bg-white'
                  : 'border-border bg-white'
              } ${isCurrent ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              {isCurrent && (
                <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Current Plan
                </span>
              )}
              <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-zinc-900">${price}</span>
                <span className="text-sm text-zinc-500">/{yearly ? 'year' : 'month'}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-zinc-600">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              {onSelectPlan ? (
                <Button
                  variant={isCurrent ? 'secondary' : plan.popular ? 'primary' : 'outline'}
                  className="w-full mt-8"
                  disabled={isCurrent}
                  onClick={() => onSelectPlan(plan)}
                >
                  {isCurrent ? 'Current Plan' : `Switch to ${plan.name}`}
                </Button>
              ) : (
                <Link to="/signup">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full mt-8"
                  >
                    Start Free Trial
                  </Button>
                </Link>
              )}
            </motion.div>
          )
        })}
      </div>

      {showAllLink && (
        <div className="text-center mt-8">
          <Link to="/pricing" className="text-sm font-medium text-primary hover:text-primary-dark">
            View full pricing comparison →
          </Link>
        </div>
      )}
    </div>
  )
}

export function PricingPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600"
          >
            Start free for 14 days. No credit card required.
          </motion.p>
        </div>
        <PricingCards />
      </div>
    </section>
  )
}
