'use client'

import { useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Header() {
  useEffect(() => {
    // Importar react-scroll dinámicamente para evitar errores de SSR
    import('react-scroll').then(() => {
      // La librería está cargada y lista para usar
    })
  }, [])

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-teal-700 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mi Horóscopo Personalizado</h1>
        <nav>
          <ul className="flex space-x-4">
            {['horoscope', 'features', 'pricing', 'faq', 'subscribe'].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-yellow-300 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

