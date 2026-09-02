import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import MarketingLayout from './layouts/MarketingLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Landing from './pages/marketing/Landing'
import Pricing from './pages/marketing/Pricing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Overview from './pages/dashboard/Overview'
import Analytics from './pages/dashboard/Analytics'
import Automations from './pages/dashboard/Automations'
import Projects from './pages/dashboard/Projects'
import ProjectDetail from './pages/dashboard/ProjectDetail'
import Team from './pages/dashboard/Team'
import Integrations from './pages/dashboard/Integrations'
import Billing from './pages/dashboard/Billing'
import Settings from './pages/dashboard/Settings'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/automations" element={<Automations />} />
            <Route path="/dashboard/projects" element={<Projects />} />
            <Route path="/dashboard/projects/:id" element={<ProjectDetail />} />
            <Route path="/dashboard/team" element={<Team />} />
            <Route path="/dashboard/integrations" element={<Integrations />} />
            <Route path="/dashboard/billing" element={<Billing />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
