
const cards=[
    {
    title: 'Guías prácticas',
    description: 'Paso a paso para cada tarea, desde cero hasta el despliegue.',
    image: 'https://i.pinimg.com/736x/f4/84/78/f48478a0fc251d2e9593d9836943de5c.jpg'
  },
  {
    title: 'Respuestas al instante',
    description: 'Tu chatbot responde dudas de código y metodología al momento.',
    image: 'https://i.pinimg.com/1200x/b6/95/e5/b695e51793fc7066a75a51bd43d4358a.jpg'
  },
  {
    title: 'Acompañamiento 24/7',
    description: 'Soporte continuo para que nunca te quedes atascado.',
    image: 'https://i.pinimg.com/1200x/64/92/11/649211ea9a1cee054caabd5ddff547ff.jpg'
  }
];

export default function InfoCardsComponent(){
    return(
        
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 blur-2xl animate-fade-in" aria-hidden="true">
        <div className="w-80 h-80 bg-blue-200 rounded-full absolute -top-10 left-1/4 animate-float-slow" />
        <div className="w-72 h-72 bg-purple-100 rounded-full absolute bottom-0 right-1/4 animate-float-slow2" />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-fade-up">¿Cómo te ayudamos?</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300 animate-fade-up"
            style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover object-center border-b border-blue-100"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700 drop-shadow-sm">{card.title}</h3>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
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
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float-slow2 {
          animation: float-slow2 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}