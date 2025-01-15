'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué es la astrología?',
    answer: 'La astrología es el estudio de los movimientos y posiciones relativas de los cuerpos celestes, bajo la creencia de que influyen en los asuntos humanos y los fenómenos terrestres.'
  },
  {
    question: '¿Con qué frecuencia se actualizan los horóscopos?',
    answer: 'Nuestros horóscopos se actualizan diariamente para proporcionar la información más precisa y relevante basada en los movimientos planetarios actuales.'
  },
  {
    question: '¿Cómo se determina mi signo zodiacal?',
    answer: 'Tu signo zodiacal se determina por la posición del Sol en el momento de tu nacimiento. Cada signo corresponde a una constelación por la que pasa el Sol en su trayectoria aparente anual.'
  },
  {
    question: '¿Puedo confiar en las predicciones astrológicas?',
    answer: 'Las predicciones astrológicas son interpretaciones basadas en la posición de los astros. Aunque muchas personas las encuentran útiles como guía, es importante tomarlas como una herramienta de reflexión y no como verdades absolutas.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-700">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left font-semibold text-purple-900 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-purple-50 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

