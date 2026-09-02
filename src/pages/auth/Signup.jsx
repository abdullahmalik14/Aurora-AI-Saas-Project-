import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import Button from '../../components/shared/Button'

const DEMO_NAME = 'Demo User'
const DEMO_EMAIL = 'demo@auroraai.com'
const DEMO_PASSWORD = 'demo1234'

export default function Signup() {
  const [name, setName] = useState(DEMO_NAME)
  const [email, setEmail] = useState(DEMO_EMAIL)
  const [password, setPassword] = useState(DEMO_PASSWORD)
  const [loading, setLoading] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await login(email, password, name)
    setLoading(false)
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-violet-600 to-blue-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative text-white max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-2xl font-bold">Aurora AI</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Start your free trial</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            14 days free. No credit card required. Full access to all features.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-surface-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-zinc-900">Aurora AI</span>
          </div>

          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Create your account</h1>
          <p className="text-sm text-zinc-500 mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:text-primary-dark">
              Sign in
            </Link>
          </p>

          <AnimatePresence>
            {showBanner && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 flex items-start gap-3"
              >
                <p className="text-sm text-primary flex-1">
                  <strong>Demo Mode</strong> — form is pre-filled. Just click Create Account.
                </p>
                <button onClick={() => setShowBanner(false)} className="text-primary/60 hover:text-primary">
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <Button type="submit" loading={loading} className="w-full" size="lg">
              Create Account
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
