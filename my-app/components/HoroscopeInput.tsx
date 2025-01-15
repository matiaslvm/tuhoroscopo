'use client'

import { useState } from 'react'

export default function HoroscopeInput() {
  const [name, setName] = useState('')
  const [audioUrl, setAudioUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const generateAudio = async () => {
    if (!name) return

    setIsLoading(true)
    try {
      // Simular la generación de audio
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAudioUrl(`data:audio/mpeg;base64,${btoa('Audio simulado para ' + name)}`)
    } catch (error) {
      console.error('Error generating audio:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="horoscope" className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="container mx-auto text-center relative z-10">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8">Descubre tu Horóscopo Personalizado</h2>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              maxLength={10}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
              className="w-full px-4 py-2 rounded-lg text-black mb-4"
            />
            <button
              onClick={generateAudio}
              disabled={isLoading}
              className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Generando...' : 'Generar Horóscopo'}
            </button>
          </div>
          {audioUrl && (
            <div className="mt-8">
              <audio controls src={audioUrl} className="mx-auto">
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

