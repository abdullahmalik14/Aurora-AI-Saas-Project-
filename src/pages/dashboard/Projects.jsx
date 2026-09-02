import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, LayoutGrid, List } from 'lucide-react'
import { projects } from '../../data/mockData'
import Badge from '../../components/shared/Badge'
import Button from '../../components/shared/Button'

const statusVariant = {
  active: 'success',
  completed: 'primary',
  paused: 'warning',
}

export default function Projects() {
  const [view, setView] = useState('grid')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex rounded-lg border border-border overflow-hidden">
          <button
            onClick={() => setView('grid')}
            className={`p-2 ${view === 'grid' ? 'bg-primary text-white' : 'bg-white text-zinc-600 hover:bg-surface-muted'}`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView('table')}
            className={`p-2 ${view === 'table' ? 'bg-primary text-white' : 'bg-white text-zinc-600 hover:bg-surface-muted'}`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/dashboard/projects/${project.id}`}
              className="rounded-xl border border-border bg-white p-5 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
              </div>
              <p className="text-xs text-zinc-500 mb-4 line-clamp-2">{project.description}</p>
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.team.map((member) => (
                    <div
                      key={member}
                      className="h-6 w-6 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-[10px] font-medium text-primary"
                    >
                      {member.charAt(0)}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-zinc-400">{project.lastUpdated}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/50">
                <th className="text-left px-5 py-3 font-medium text-zinc-500">Project</th>
                <th className="text-left px-5 py-3 font-medium text-zinc-500">Status</th>
                <th className="text-left px-5 py-3 font-medium text-zinc-500">Progress</th>
                <th className="text-left px-5 py-3 font-medium text-zinc-500">Team</th>
                <th className="text-left px-5 py-3 font-medium text-zinc-500">Updated</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-border hover:bg-surface-muted/30">
                  <td className="px-5 py-3">
                    <Link to={`/dashboard/projects/${project.id}`} className="font-medium text-zinc-900 hover:text-primary">
                      {project.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3">
                    <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 rounded-full bg-surface-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
                      </div>
                      <span className="text-xs text-zinc-500">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex -space-x-1">
                      {project.team.map((m) => (
                        <div key={m} className="h-6 w-6 rounded-full bg-primary/10 border border-white flex items-center justify-center text-[10px] font-medium text-primary">
                          {m.charAt(0)}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3 text-zinc-500">{project.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
