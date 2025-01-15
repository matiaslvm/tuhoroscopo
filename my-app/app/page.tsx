import Header from './components/Header'
import HoroscopeInput from './components/HoroscopeInput'
import Features from './components/Features'
import PricingPlans from './components/PricingPlans'
import FAQ from './components/FAQ'
import SubscriptionForm from './components/SubscriptionForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-400 to-blue-500 text-white">
      <Header />
      <HoroscopeInput />
      <Features />
      <PricingPlans />
      <FAQ />
      <SubscriptionForm />
      <Footer />
    </main>
  )
}

