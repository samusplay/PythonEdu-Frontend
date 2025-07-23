// src/components/HeroComponent.jsx
import { Link } from 'react-router-dom';

export default function HeroComponent() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 blur-2xl animate-fade-in" aria-hidden="true">
        <div className="w-96 h-96 bg-blue-200 rounded-full absolute -top-20 -left-20 animate-float-slow" />
        <div className="w-80 h-80 bg-purple-100 rounded-full absolute bottom-0 right-0 animate-float-slow2" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg leading-[1.15] pb-2 animate-fade-up">
        Tu asistente de proyectos de programación
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl drop-shadow-sm animate-fade-in">
        Chatea con nuestro bot y recibe pasos prácticos y respuestas claras.
      </p>
      <Link
        to="/chat"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 animate-bounce-in"
      >
        Iniciar Chat
      </Link>
      {/* Animaciones personalizadas */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease both;
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 1s 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow2 {
          animation: float-slow2 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
