import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Technology from '@/components/Technology'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <Roadmap />
      <Team />
      <Footer />
    </main>
  )
}