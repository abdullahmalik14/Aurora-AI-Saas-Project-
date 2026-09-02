import { useState } from 'react'
import { Plus, Clock, Webhook, Calendar, Brain } from 'lucide-react'
import { automations as initialAutomations } from '../../data/mockData'
import Toggle from '../../components/shared/Toggle'
import Badge from '../../components/shared/Badge'
import Button from '../../components/shared/Button'
import Modal from '../../components/shared/Modal'

const triggerIcons = {
  Schedule: Calendar,
  Webhook: Webhook,
  Event: Clock,
  'AI Trigger': Brain,
}

export default function Automations() {
  const [automations, setAutomations] = useState(initialAutomations)
  const [showModal, setShowModal] = useState(false)
  const [newName, setNewName] = useState('')

  const toggleStatus = (id) => {
    setAutomations((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: a.status === 'active' ? 'paused' : 'active' } : a
      )
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{automations.length} automations configured</p>
        <Button onClick={() => setShowModal(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Automation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {automations.map((automation) => {
          const TriggerIcon = triggerIcons[automation.trigger] || Clock
          return (
            <div
              key={automation.id}
              className="rounded-xl border border-border bg-white p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <TriggerIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">{automation.name}</h3>
                    <p className="text-xs text-zinc-500">{automation.trigger} trigger</p>
                  </div>
                </div>
                <Toggle
                  enabled={automation.status === 'active'}
                  onChange={() => toggleStatus(automation.id)}
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <Badge variant={automation.status === 'active' ? 'success' : 'warning'}>
                  {automation.status}
                </Badge>
                <span className="text-zinc-400">Last run: {automation.lastRun}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border text-xs text-zinc-500">
                {automation.runs.toLocaleString()} total runs
              </div>
            </div>
          )
        })}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Create New Automation">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Automation Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g., Weekly Report Generator"
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Trigger Type</label>
            <select className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Schedule</option>
              <option>Webhook</option>
              <option>Event</option>
              <option>AI Trigger</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button onClick={() => { setShowModal(false); setNewName('') }}>Create</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
