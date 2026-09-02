import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'

export default function CTABanner() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-600 to-blue-600 px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start your free trial today
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Join thousands of teams using Aurora AI to automate smarter and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border-0 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Link to="/signup" className="w-full sm:w-auto shrink-0">
                <Button variant="secondary" size="lg" className="w-full gap-2 bg-white text-primary hover:bg-white/90">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
