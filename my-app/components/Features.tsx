import { Star, Heart, Briefcase, Coins } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    title: 'Predicciones Precisas',
    description: 'Nuestros astrólogos expertos analizan los movimientos planetarios para ofrecerte las predicciones más precisas.',
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-400" />,
    title: 'Consejos de Amor',
    description: 'Descubre cómo los astros influyen en tu vida amorosa y recibe consejos para mejorar tus relaciones.',
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-400" />,
    title: 'Guía de Carrera',
    description: 'Obtén orientación sobre tus decisiones profesionales basada en tu carta astral y las energías cósmicas.',
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    icon: <Coins className="h-8 w-8 text-green-400" />,
    title: 'Prosperidad Financiera',
    description: 'Aprende a alinear tus finanzas con los ciclos astrológicos para maximizar tu potencial de abundancia.',
    image: '/placeholder.svg?height=200&width=200'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Características</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-teal-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Image src={feature.image || "/placeholder.svg"} alt={feature.title} width={200} height={200} className="mx-auto rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

