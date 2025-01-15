import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Gratis',
    price: '0',
    features: ['Horóscopo diario', 'Compatibilidad básica', 'Predicciones generales'],
    highlighted: false
  },
  {
    name: 'Básico',
    price: '9.99',
    features: ['Todo lo del plan Gratis', 'Horóscopo semanal', 'Compatibilidad avanzada', 'Asesoramiento por email'],
    highlighted: false
  },
  {
    name: 'Premium',
    price: '19.99',
    features: ['Todo lo del plan Básico', 'Horóscopo mensual', 'Lectura de cartas del tarot', 'Asesoramiento personalizado'],
    highlighted: true
  },
  {
    name: 'VIP',
    price: '39.99',
    features: ['Todo lo del plan Premium', 'Horóscopo anual', 'Consultas ilimitadas', 'Acceso a eventos exclusivos'],
    highlighted: false
  }
]

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-12 px-4 sm:px-6 lg:px-8 bg-teal-600">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.highlighted ? 'ring-4 ring-yellow-400 scale-105' : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-purple-700 mb-6">${plan.price}<span className="text-sm font-normal">/mes</span></p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-purple-100">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                  Elegir Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

