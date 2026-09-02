import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Copy, Plus } from 'lucide-react'
import { apiKeys as initialKeys } from '../../data/mockData'
import Toggle from '../../components/shared/Toggle'
import Button from '../../components/shared/Button'
import { useAuth } from '../../context/AuthContext'

const tabs = ['Profile', 'Notifications', 'Security', 'API Keys']

const notificationSettings = [
  { label: 'Email notifications', description: 'Receive email updates about your account', default: true },
  { label: 'Automation alerts', description: 'Get notified when automations fail or complete', default: true },
  { label: 'Weekly digest', description: 'Summary of activity and metrics every Monday', default: false },
  { label: 'Billing reminders', description: 'Notifications about upcoming payments', default: true },
  { label: 'Team activity', description: 'When team members join or make changes', default: false },
]

export default function Settings() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('Profile')
  const [notifications, setNotifications] = useState(
    notificationSettings.map((n) => ({ ...n, enabled: n.default }))
  )
  const [twoFA, setTwoFA] = useState(false)
  const [apiKeys, setApiKeys] = useState(initialKeys)
  const [visibleKeys, setVisibleKeys] = useState({})

  const toggleNotification = (index) => {
    setNotifications((prev) =>
      prev.map((n, i) => (i === index ? { ...n, enabled: !n.enabled } : n))
    )
  }

  const toggleKeyVisibility = (id) => {
    setVisibleKeys((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const maskKey = (key) => key.slice(0, 12) + '••••••••••••••••'

  return (
    <div className="space-y-6">
      <div className="border-b border-border">
        <div className="flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab ? 'text-primary' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="settings-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Profile' && (
        <div className="rounded-xl border border-border bg-white p-6 max-w-lg space-y-5">
          <div className="flex items-center gap-4">
            <img src={user?.avatar} alt={user?.name} className="h-16 w-16 rounded-full bg-surface-muted" />
            <Button variant="secondary" size="sm">Upload Photo</Button>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Full Name</label>
            <input
              type="text"
              defaultValue={user?.name}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <Button>Save Changes</Button>
        </div>
      )}

      {activeTab === 'Notifications' && (
        <div className="rounded-xl border border-border bg-white divide-y divide-border max-w-lg">
          {notifications.map((item, i) => (
            <div key={item.label} className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="text-sm font-medium text-zinc-900">{item.label}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{item.description}</div>
              </div>
              <Toggle enabled={item.enabled} onChange={() => toggleNotification(i)} />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Security' && (
        <div className="space-y-6 max-w-lg">
          <div className="rounded-xl border border-border bg-white p-6 space-y-4">
            <h3 className="text-sm font-semibold text-zinc-900">Change Password</h3>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Current Password</label>
              <input type="password" className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">New Password</label>
              <input type="password" className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Confirm New Password</label>
              <input type="password" className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <Button>Update Password</Button>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Two-Factor Authentication</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Add an extra layer of security to your account</p>
              </div>
              <Toggle enabled={twoFA} onChange={setTwoFA} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'API Keys' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button className="gap-2" size="sm">
              <Plus className="h-4 w-4" />
              Generate New Key
            </Button>
          </div>
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="rounded-xl border border-border bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">{apiKey.name}</h3>
                  <p className="text-xs text-zinc-500">Created {apiKey.created} · Last used {apiKey.lastUsed}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded-lg bg-surface-muted px-3 py-2 text-xs font-mono text-zinc-600">
                  {visibleKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                </code>
                <button
                  onClick={() => toggleKeyVisibility(apiKey.id)}
                  className="rounded-lg p-2 text-zinc-400 hover:text-zinc-600 hover:bg-surface-muted"
                >
                  {visibleKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button className="rounded-lg p-2 text-zinc-400 hover:text-zinc-600 hover:bg-surface-muted">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
