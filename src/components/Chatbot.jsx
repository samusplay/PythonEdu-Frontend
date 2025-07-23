// src/components/Chatbot.jsx
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Chatbot({ embedded = false }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿En qué proyecto estás trabajando hoy?' }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Scroll automático al final cuando llega un nuevo mensaje
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    // 1) Agregar mensaje del usuario
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    // 2) Aquí iría la llamada real a tu API y luego:
    //    setMessages(msgs => [...msgs, { from: 'bot', text: respuesta }]);

    setInput('');

    // Si estoy en modo embedded y quieres guiar al usuario:
    // podrías redirigir a /registro tras cierta interacción:
    // if (embedded && algunTrigger) navigate('/registro');
  };

  // Clases dinámicas según modo
  const containerClasses = embedded
    ? 'max-w-2xl mx-auto my-12 h-[500px] bg-white shadow-lg rounded-lg flex flex-col'
    : 'fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col';

  return (
    <div className={containerClasses}>
      <header className="p-2 border-b flex justify-between items-center">
        <span className="font-bold">PythonEdu Bot</span>
        {/* Solo en modo flotante */}
        {!embedded && (
          <button
            className="text-xl leading-none"
            onClick={() => navigate(-1)} // O cerrar de otra forma
          >
            &times;
          </button>
        )}
      </header>

      <div
        ref={containerRef}
        className="flex-grow p-4 overflow-y-auto space-y-2"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.from === 'bot' ? 'justify-start' : 'justify-end'
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg max-w-[75%] break-words ${
                m.from === 'bot'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <footer className="p-2 border-t flex">
        <input
          type="text"
          className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Escribe tu mensaje..."
        />
        <button
          className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </footer>
    </div>
  );
}

Chatbot.propTypes = {
  embedded: PropTypes.bool
};

