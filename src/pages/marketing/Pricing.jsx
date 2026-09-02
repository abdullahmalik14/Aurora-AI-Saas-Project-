import { motion } from 'framer-motion'
import { PricingCards } from '../../components/marketing/PricingCards'
import PricingTable from '../../components/marketing/PricingTable'
import FAQ from '../../components/marketing/FAQ'
import CTABanner from '../../components/marketing/CTABanner'

export default function Pricing() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-zinc-900"
          >
            Choose the right plan for your team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Start with a 14-day free trial. Scale as you grow. Cancel anytime.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingCards showAllLink={false} />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-12">
            Compare plans in detail
          </h2>
          <PricingTable />
        </div>
      </section>

      <FAQ />
      <CTABanner />
    </>
  )
}
