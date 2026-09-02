import { Outlet } from 'react-router-dom'
import Navbar from '../components/marketing/Navbar'
import Footer from '../components/marketing/Footer'

export default function MarketingLayout() {
  return (
    <div className="min-h-screen bg-surface-light">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
