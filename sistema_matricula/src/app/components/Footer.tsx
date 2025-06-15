export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-lg">MC</span>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Mariscal Andrés Avelino Cáceres</h3>
              <p className="text-blue-300 text-xs md:text-sm">Institución Educativa</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 md:pt-6">
            <p className="text-gray-300 text-xs md:text-sm">
              © 2024 Mariscal Andrés Avelino Cáceres. Todos los derechos reservados.
            </p>
            <p className="text-blue-400 text-xs mt-1 md:mt-2">
              Educación de calidad para el futuro de nuestros hijos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 