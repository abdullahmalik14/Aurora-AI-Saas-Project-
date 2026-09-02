import { useState } from 'react'
import { Plus } from 'lucide-react'
import { teamMembers as initialMembers } from '../../data/mockData'
import Badge from '../../components/shared/Badge'
import Button from '../../components/shared/Button'
import Modal from '../../components/shared/Modal'

const roleVariant = {
  Admin: 'primary',
  Editor: 'info',
  Viewer: 'default',
}

export default function Team() {
  const [members] = useState(initialMembers)
  const [showModal, setShowModal] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{members.length} team members</p>
        <Button onClick={() => setShowModal(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted/50">
              <th className="text-left px-5 py-3 font-medium text-zinc-500">Member</th>
              <th className="text-left px-5 py-3 font-medium text-zinc-500">Email</th>
              <th className="text-left px-5 py-3 font-medium text-zinc-500">Role</th>
              <th className="text-left px-5 py-3 font-medium text-zinc-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-border hover:bg-surface-muted/30">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img src={member.avatar} alt={member.name} className="h-8 w-8 rounded-full bg-surface-muted" />
                    <span className="font-medium text-zinc-900">{member.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-zinc-600">{member.email}</td>
                <td className="px-5 py-3">
                  <Badge variant={roleVariant[member.role]}>{member.role}</Badge>
                </td>
                <td className="px-5 py-3">
                  <Badge variant={member.status === 'active' ? 'success' : 'warning'}>
                    {member.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Invite Team Member">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email Address</label>
            <input
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="colleague@company.com"
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Role</label>
            <select className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Editor</option>
              <option>Viewer</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button onClick={() => { setShowModal(false); setInviteEmail('') }}>Send Invite</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
