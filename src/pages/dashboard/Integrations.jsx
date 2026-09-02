import { useState } from 'react'
import { motion } from 'framer-motion'
import { integrations as initialIntegrations } from '../../data/mockData'
import Badge from '../../components/shared/Badge'
import Button from '../../components/shared/Button'

export default function Integrations() {
  const [integrations, setIntegrations] = useState(initialIntegrations)

  const toggleConnection = (id) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i))
    )
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-zinc-500">
        {integrations.filter((i) => i.connected).length} of {integrations.length} integrations connected
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <motion.div
            key={integration.id}
            layout
            className="rounded-xl border border-border bg-white p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-muted text-lg font-bold text-zinc-500">
                  {integration.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">{integration.name}</h3>
                  <Badge variant="default">{integration.category}</Badge>
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed">{integration.description}</p>
            <Button
              variant={integration.connected ? 'secondary' : 'primary'}
              size="sm"
              className="w-full"
              onClick={() => toggleConnection(integration.id)}
            >
              <motion.span
                key={integration.connected ? 'connected' : 'connect'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {integration.connected ? 'Connected' : 'Connect'}
              </motion.span>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
