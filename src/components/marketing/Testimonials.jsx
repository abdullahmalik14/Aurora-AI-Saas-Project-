import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../../data/mockData'

export default function Testimonials() {
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
            Loved by teams worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-600"
          >
            See what our customers have to say about Aurora AI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-zinc-700 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full bg-surface-muted"
                />
                <div>
                  <div className="font-semibold text-zinc-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-zinc-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
