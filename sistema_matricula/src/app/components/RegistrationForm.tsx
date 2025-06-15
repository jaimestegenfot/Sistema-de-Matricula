"use client"

import React, { useState } from "react";
import Swal from 'sweetalert2';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    // Datos del estudiante
    nombresEstudiante: '',
    apellidosEstudiante: '',
    generoEstudiante: '',
    tipoDocumentoEstudiante: '',
    numeroDocumentoEstudiante: '',
    nivel: '',
    
    // Datos del padre/apoderado
    nombresPadre: '',
    apellidosPadre: '',
    generoPadre: '',
    tipoDocumentoPadre: '',
    numeroDocumentoPadre: '',
    pais: '',
    celular: '',
    ocupacion: '',
    correo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Aquí iría la lógica de envío del formulario
      // Por ahora solo simulamos el envío exitoso
      
      await Swal.fire({
        title: '¡Solicitud Enviada!',
        text: 'Tu solicitud de admisión ha sido recibida. Nos pondremos en contacto contigo pronto para continuar con el proceso.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#0D9488', // Color teal que coincide con tu tema
        background: '#ffffff',
        customClass: {
          title: 'font-serif',
          confirmButton: 'font-semibold'
        }
      });
      
      // Limpiar el formulario
      setFormData({
        nombresEstudiante: '',
        apellidosEstudiante: '',
        generoEstudiante: '',
        tipoDocumentoEstudiante: '',
        numeroDocumentoEstudiante: '',
        nivel: '',
        nombresPadre: '',
        apellidosPadre: '',
        generoPadre: '',
        tipoDocumentoPadre: '',
        numeroDocumentoPadre: '',
        pais: '',
        celular: '',
        ocupacion: '',
        correo: ''
      });
    } catch (error) {
      await Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar la solicitud. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#EF4444',
        background: '#ffffff',
        customClass: {
          title: 'font-serif',
          confirmButton: 'font-semibold'
        }
      });
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 text-black via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Datos del Estudiante */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-xl border border-blue-200">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-gray-800 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 text-sm md:text-base">👦</span>
                <span className="text-sm md:text-base lg:text-lg">Datos del Estudiante</span>
              </h2>
              <div className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  name="nombresEstudiante"
                  placeholder="Nombres"
                  value={formData.nombresEstudiante}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-blue-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <input
                  type="text"
                  name="apellidosEstudiante"
                  placeholder="Apellidos"
                  value={formData.apellidosEstudiante}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-blue-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <select
                  name="generoEstudiante"
                  value={formData.generoEstudiante}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-blue-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                >
                  <option value="">Género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
                <select
                  name="tipoDocumentoEstudiante"
                  value={formData.tipoDocumentoEstudiante}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-blue-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                >
                  <option value="">Tipo de Documento</option>
                  <option value="dni">DNI</option>
                  <option value="pasaporte">Pasaporte</option>
                  <option value="carnet_extranjeria">Carnet de Extranjería</option>
                </select>
                <input
                  type="text"
                  name="numeroDocumentoEstudiante"
                  placeholder="N° de Documento"
                  value={formData.numeroDocumentoEstudiante}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-blue-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <select
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-blue-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                >
                  <option value="">Nivel</option>
                  <option value="inicial">Inicial</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                </select>
              </div>
            </div>

            {/* Datos del Padre/Apoderado */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-xl border border-teal-200">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-gray-800 flex items-center">
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 text-sm md:text-base">👨‍👩‍👧‍👦</span>
                <span className="text-sm md:text-base lg:text-lg">Datos del Padre de Familia y/o Apoderado</span>
              </h2>
              <div className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  name="nombresPadre"
                  placeholder="Nombres"
                  value={formData.nombresPadre}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <input
                  type="text"
                  name="apellidosPadre"
                  placeholder="Apellidos"
                  value={formData.apellidosPadre}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <select
                  name="generoPadre"
                  value={formData.generoPadre}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                >
                  <option value="">Género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
                <select
                  name="tipoDocumentoPadre"
                  value={formData.tipoDocumentoPadre}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                >
                  <option value="">Tipo de Documento</option>
                  <option value="dni">DNI</option>
                  <option value="pasaporte">Pasaporte</option>
                  <option value="carnet_extranjeria">Carnet de Extranjería</option>
                </select>
                <input
                  type="text"
                  name="numeroDocumentoPadre"
                  placeholder="N° de Documento"
                  value={formData.numeroDocumentoPadre}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <select
                  name="pais"
                  value={formData.pais}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                >
                  <option value="">País</option>
                  <option value="peru">Perú</option>
                  <option value="colombia">Colombia</option>
                  <option value="ecuador">Ecuador</option>
                  <option value="venezuela">Venezuela</option>
                  <option value="otro">Otro</option>
                </select>
                <input
                  type="tel"
                  name="celular"
                  placeholder="Celular / Teléfono"
                  value={formData.celular}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <input
                  type="text"
                  name="ocupacion"
                  placeholder="Ocupación"
                  value={formData.ocupacion}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo Electrónico"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="w-full p-3 md:p-4 border-2 border-teal-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-white shadow-sm text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          {/* reCAPTCHA placeholder */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-dashed border-gray-300 shadow-lg">
              <p className="text-gray-600 text-sm md:text-lg font-medium">reCAPTCHA se integrará aquí</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              🎓 Solicitar Admisión
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 