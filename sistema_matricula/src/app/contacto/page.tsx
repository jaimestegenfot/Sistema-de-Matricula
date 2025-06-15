"use client"
import React, { useState } from 'react';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="py-12 px-2 md:px-0 bg-white mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-center mb-2 text-green-500">contacto</h2>
        <p className="text-center text-gray-700 mb-8">Para mas información envíanos tus datos o llamanos al número que aparece en pantalla</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-black">
          <div className="border rounded-lg p-6 flex flex-col items-center shadow-sm">
            <span className="text-4xl mb-2">📍</span>
            <h3 className="font-bold text-lg mb-1">DIRECCION</h3>
            <p className="text-center text-gray-700 text-sm">interoceánica sur con Jr. Manco Inca, Puerto Maldonado 17001</p>
          </div>
          <div className="border rounded-lg p-6 flex flex-col items-center shadow-sm">
            <span className="text-4xl mb-2">📞</span>
            <h3 className="font-bold text-lg mb-1">TELÉFONO</h3>
            <p className="text-center text-gray-700 text-sm">+51 989 420 118</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Formulario */}
          
          <form onSubmit={handleSubmit} className="space-y-4 border-2 border-green-700 rounded-lg p-4">
            <div>
              <label className="block text-gray-700 mb-1">Nombre</label>
              <input type="text" required className="text-black w-full border rounded px-3 py-2 focus:outline-none focus:ring-3 focus:border-green-500 focus:ring-green-600" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Correo Electrónico</label>
              <input type="email" required className="text-black w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" placeholder="Tu correo" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Teléfono</label>
              <input type="tel" required className="text-black w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" placeholder="Tu teléfono" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Mensaje</label>
              <textarea required className="text-black w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" placeholder="Tu mensaje" rows={3}></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-cyan-700 text-white font-semibold py-2 rounded shadow-md hover:from-green-600 hover:to-cyan-800 transition-all">ENVIAR DATOS</button>
            {enviado && <p className="text-green-600 text-center font-medium mt-2">¡Mensaje enviado correctamente!</p>}
          </form>
        
          

          {/* Mapa */}
          <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Ubicación I.E.P. Andres Avelino Cáceres"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3893.8844406068633!2d-69.19939392535615!3d-12.589866987691522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDM1JzIzLjUiUyA2OcKwMTEnNDguNiJX!5e0!3m2!1ses-419!2spe!4v1750027277214!5m2!1ses-419!2sp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>
      </div>
    </section>
  );
} 