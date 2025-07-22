
const cards=[
    {
    title: 'Guías prácticas',
    description: 'Paso a paso para cada tarea, desde cero hasta el despliegue.',
    image: 'https://source.unsplash.com/400x300/?coding,guide'
  },
  {
    title: 'Respuestas al instante',
    description: 'Tu chatbot responde dudas de código y metodología al momento.',
    image: 'https://source.unsplash.com/400x300/?chat,ai'
  },
  {
    title: 'Acompañamiento 24/7',
    description: 'Soporte continuo para que nunca te quedes atascado.',
    image: 'https://source.unsplash.com/400x300/?support,help'
  }
];

export default function InfoCardsComponent(){
    return(
            
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">¿Cómo te ayudamos?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}