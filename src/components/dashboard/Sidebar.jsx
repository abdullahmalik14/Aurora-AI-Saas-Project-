import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BarChart3,
  Zap,
  FolderKanban,
  Users,
  Plug,
  CreditCard,
  Settings,
  Sparkles,
  LogOut,
  ChevronLeft,
  X,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { navItems } from '../../data/mockData'

const iconMap = {
  LayoutDashboard,
  BarChart3,
  Zap,
  FolderKanban,
  Users,
  Plug,
  CreditCard,
  Settings,
}

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between h-16 px-4 border-b border-border-dark">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          {!collapsed && <span className="text-sm font-bold text-white">Aurora AI</span>}
        </div>
        <button
          onClick={onMobileClose || onToggle}
          className="rounded-lg p-1 text-zinc-400 hover:text-white hover:bg-white/5 lg:hidden"
        >
          <X className="h-4 w-4" />
        </button>
        <button
          onClick={onToggle}
          className="hidden lg:block rounded-lg p-1 text-zinc-400 hover:text-white hover:bg-white/5"
        >
          <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={onMobileClose}
              className={({ isActive }) =>
                `relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-lg bg-primary/20 border border-primary/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className="h-4 w-4 relative z-10 shrink-0" />
                  {!collapsed && <span className="relative z-10">{item.label}</span>}
                </>
              )}
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t border-border-dark p-3">
        <div className={`flex items-center gap-3 rounded-lg p-2 ${collapsed ? 'justify-center' : ''}`}>
          <img
            src={user?.avatar}
            alt={user?.name}
            className="h-8 w-8 rounded-full bg-zinc-700 shrink-0"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">{user?.name}</div>
              <div className="text-xs text-zinc-500 truncate">{user?.email}</div>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className={`mt-2 flex items-center gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && 'Log Out'}
        </button>
      </div>
    </>
  )

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onMobileClose} />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-surface-dark border-r border-border-dark flex flex-col transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-60'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
