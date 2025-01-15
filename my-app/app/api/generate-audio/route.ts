import { NextResponse } from 'next/server'
import { ELEVENLABS_API_KEY } from '@/app/config'
import fetch from 'node-fetch'

export async function POST(req: Request) {
  const { name } = await req.json()
  
  const text = `Hola ${name}, este va a ser un horóscopo semanal, donde vamos a decirte cómo está tu amor, carrera, dinero y salud.`
  
  // Lógica para generar el audio con ElevenLabs
  const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ELEVENLABS_API_KEY}`
    },
    body: JSON.stringify({
      text: text,
      voice: 'es-ES-Standard-A' // Ajusta el parámetro de voz según tus necesidades
    })
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'Error generating audio' }, { status: response.status })
  }

  const audioBuffer = await response.buffer()
  const base64Audio = audioBuffer.toString('base64')

  return NextResponse.json({ audioUrl: `data:audio/mpeg;base64,${base64Audio}` })
}

