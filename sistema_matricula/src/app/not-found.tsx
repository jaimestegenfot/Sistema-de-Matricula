"use client"
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-serif font-bold text-green-500 mb-4">404</h1>
        <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">¡Ups! Página no encontrada</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-green-500 to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-green-600 hover:to-cyan-800 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
} 