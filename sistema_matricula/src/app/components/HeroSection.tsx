import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-8 md:py-12 mt-16">
        <div className="relative w-[90vw] h-[200px] md:w-[90vw] md:h-[300px] lg:w-[50vw] lg:h-[300px] rounded-xl overflow-hidden shadow-2xl mx-auto">
          <Image
            src="/portada.jpg"
            alt="I.E. Mariscal Andrés Avelino Cáceres"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Welcome Text */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-lg border border-blue-100">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              Les damos la bienvenida y agradecemos su interés por preferir 
              <span className="text-teal-600 font-semibold"> Mariscal Andrés Avelino Cáceres</span>, como una 
              alternativa para la educación de sus hijos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 