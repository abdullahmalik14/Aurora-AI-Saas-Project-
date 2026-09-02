import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Edit, CheckCircle2, Circle, Clock } from 'lucide-react'
import { projects, projectTasks, projectActivity } from '../../data/mockData'
import Badge from '../../components/shared/Badge'
import Button from '../../components/shared/Button'

const tabs = ['Overview', 'Tasks', 'Activity', 'Settings']

const taskStatusIcon = {
  done: CheckCircle2,
  'in-progress': Clock,
  todo: Circle,
}

const taskStatusColor = {
  done: 'text-emerald-500',
  'in-progress': 'text-amber-500',
  todo: 'text-zinc-300',
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number(id)) || projects[0]
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-1 text-sm text-zinc-500">
        <Link to="/dashboard" className="hover:text-zinc-900">Dashboard</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/dashboard/projects" className="hover:text-zinc-900">Projects</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-zinc-900 font-medium">{project.name}</span>
      </nav>

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold text-zinc-900">{project.name}</h2>
            <Badge variant={project.status === 'active' ? 'success' : project.status === 'completed' ? 'primary' : 'warning'}>
              {project.status}
            </Badge>
          </div>
          <p className="text-sm text-zinc-500">{project.description}</p>
        </div>
        <Button variant="secondary" className="gap-2">
          <Edit className="h-4 w-4" />
          Edit
        </Button>
      </div>

      <div className="border-b border-border">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-sm font-medium transition-colors ${
                activeTab === tab ? 'text-primary' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="project-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-white p-5">
            <div className="text-sm text-zinc-500 mb-1">Progress</div>
            <div className="text-3xl font-bold text-zinc-900">{project.progress}%</div>
            <div className="mt-3 h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <div className="text-sm text-zinc-500 mb-1">Team Members</div>
            <div className="text-3xl font-bold text-zinc-900">{project.team.length}</div>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <div className="text-sm text-zinc-500 mb-1">Last Updated</div>
            <div className="text-lg font-semibold text-zinc-900">{project.lastUpdated}</div>
          </div>
        </div>
      )}

      {activeTab === 'Tasks' && (
        <div className="rounded-xl border border-border bg-white divide-y divide-border">
          {projectTasks.map((task) => {
            const StatusIcon = taskStatusIcon[task.status]
            return (
              <div key={task.id} className="flex items-center gap-4 px-5 py-4">
                <StatusIcon className={`h-5 w-5 ${taskStatusColor[task.status]}`} />
                <div className="flex-1">
                  <div className="text-sm font-medium text-zinc-900">{task.title}</div>
                  <div className="text-xs text-zinc-500">Assigned to {task.assignee}</div>
                </div>
                <Badge variant={task.status === 'done' ? 'success' : task.status === 'in-progress' ? 'warning' : 'default'}>
                  {task.status}
                </Badge>
                <span className="text-xs text-zinc-400">Due {task.due}</span>
              </div>
            )
          })}
        </div>
      )}

      {activeTab === 'Activity' && (
        <div className="rounded-xl border border-border bg-white divide-y divide-border">
          {projectActivity.map((item) => (
            <div key={item.id} className="px-5 py-4">
              <p className="text-sm text-zinc-700">
                <span className="font-medium">{item.user}</span> {item.action}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">{item.time}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Settings' && (
        <div className="rounded-xl border border-border bg-white p-5 space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Project Name</label>
            <input
              type="text"
              defaultValue={project.name}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Description</label>
            <textarea
              defaultValue={project.description}
              rows={3}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>
          <Button>Save Changes</Button>
        </div>
      )}
    </div>
  )
}
