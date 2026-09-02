import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Search, Bell, Menu } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { pageTitles } from '../../data/mockData'

export default function Topbar({ onMenuClick, sidebarCollapsed }) {
  const { user } = useAuth()
  const location = useLocation()
  const [showDropdown, setShowDropdown] = useState(false)

  const getTitle = () => {
    if (location.pathname.startsWith('/dashboard/projects/') && location.pathname !== '/dashboard/projects') {
      return 'Project Detail'
    }
    return pageTitles[location.pathname] || 'Dashboard'
  }

  return (
    <header
      className={`fixed top-0 right-0 z-30 h-16 bg-white border-b border-border flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
        sidebarCollapsed ? 'left-16' : 'left-60'
      } max-lg:left-0`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-500 hover:bg-surface-muted lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold text-zinc-900">{getTitle()}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-surface-muted/50 px-3 py-1.5">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm focus:outline-none w-40 lg:w-56 placeholder:text-zinc-400"
          />
        </div>

        <button className="relative rounded-lg p-2 text-zinc-500 hover:bg-surface-muted transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 rounded-lg p-1 hover:bg-surface-muted transition-colors"
          >
            <img src={user?.avatar} alt={user?.name} className="h-8 w-8 rounded-full bg-surface-muted" />
          </button>
          {showDropdown && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-white shadow-lg z-50 py-1">
                <div className="px-4 py-2 border-b border-border">
                  <div className="text-sm font-medium text-zinc-900">{user?.name}</div>
                  <div className="text-xs text-zinc-500">{user?.email}</div>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-600 hover:bg-surface-muted">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-600 hover:bg-surface-muted">
                  Settings
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
