'use client'

import { useState } from 'react'

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    birthtime: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos a un webhook
    console.log('Datos del formulario:', formData)
  }

  return (
    <section id="subscribe" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center">Suscríbete</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
          </div>
          <div>
            <label htmlFor="birthdate" className="block mb-1">Fecha de nacimiento</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              required
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
          </div>
          <div>
            <label htmlFor="birthtime" className="block mb-1">Hora de nacimiento (opcional)</label>
            <input
              type="time"
              id="birthtime"
              name="birthtime"
              value={formData.birthtime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-purple-900 py-2 px-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  )
}

