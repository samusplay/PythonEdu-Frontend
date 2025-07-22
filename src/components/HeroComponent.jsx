// src/components/HeroComponent.jsx
import { Link } from 'react-router-dom';

export default function HeroComponent() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 bg-white">
      <h1 className="text-5xl font-bold mb-4">
        Tu asistente de proyectos de programación
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Chatea con nuestro bot y recibe pasos prácticos y respuestas claras.
      </p>
      <Link
        to="/chat"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Iniciar Chat
      </Link>
    </section>
  );
}
