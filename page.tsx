// app/page.tsx - Landing Page
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900/20 to-cobalt-900/30">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  )
}