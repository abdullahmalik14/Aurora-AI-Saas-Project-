import Hero from '../../components/marketing/Hero'
import LogoMarquee from '../../components/marketing/LogoMarquee'
import Features from '../../components/marketing/Features'
import HowItWorks from '../../components/marketing/HowItWorks'
import ProductDemo from '../../components/marketing/ProductDemo'
import Testimonials from '../../components/marketing/Testimonials'
import { PricingPreview } from '../../components/marketing/PricingCards'
import FAQ from '../../components/marketing/FAQ'
import CTABanner from '../../components/marketing/CTABanner'

export default function Landing() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Features />
      <HowItWorks />
      <ProductDemo />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTABanner />
    </>
  )
}
