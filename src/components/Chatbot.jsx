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
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    setInput('');
    // Aquí iría la llamada real a tu API y luego:
    // setMessages(msgs => [...msgs, { from: 'bot', text: respuesta }]);
  };

  // Clases dinámicas según modo
  const containerClasses = embedded
    ? 'relative max-w-2xl mx-auto my-16 md:my-24 flex flex-col items-center z-10'
    : 'fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col';

  return (
    <div className={containerClasses}>
      {embedded ? (
        <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl border border-blue-100/60 backdrop-blur-md p-0 md:p-1 animate-fade-up">
          <div className="relative flex flex-col min-h-[340px] md:min-h-[420px] h-full">
            <header className="px-6 pt-6 pb-2 flex items-center gap-2">
              <span className="font-extrabold text-blue-700 text-lg drop-shadow-sm tracking-wide">PythonEdu Bot</span>
            </header>
            <div
              ref={containerRef}
              className="flex-grow px-6 py-2 overflow-y-auto space-y-3 custom-scrollbar"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'} animate-fade-in`}
                >
                  <span
                    className={`inline-block px-5 py-3 rounded-2xl max-w-[80%] break-words shadow-md text-base font-medium transition-all duration-200 '
                      + (m.from === 'bot'
                        ? 'bg-white/80 text-blue-800 border border-blue-100 backdrop-blur-md'
                        : 'bg-gradient-to-r from-blue-600 to-purple-500 text-white')
                    }`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <footer className="px-6 pb-6 pt-2 flex gap-2 items-center">
              <input
                type="text"
                className="flex-grow border border-blue-100 rounded-l-2xl px-4 py-2 focus:outline-none bg-white/80 backdrop-blur-md text-gray-800 placeholder-gray-400 shadow-sm"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="¿Qué deseas saber?"
              />
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-r-2xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={sendMessage}
                aria-label="Enviar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </footer>
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
            /* Scrollbar personalizada */
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #c7d2fe;
              border-radius: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
          `}</style>
        </div>
      ) : (
        // Modo flotante clásico
        <div className="w-full h-full bg-white shadow-lg rounded-lg flex flex-col">
          <header className="p-2 border-b flex justify-between items-center">
            <span className="font-bold">PythonEdu Bot</span>
            <button
              className="text-xl leading-none"
              onClick={() => navigate(-1)}
            >
              &times;
            </button>
          </header>
          <div
            ref={containerRef}
            className="flex-grow p-4 overflow-y-auto space-y-2"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}
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
      )}
    </div>
  );
}

Chatbot.propTypes = {
  embedded: PropTypes.bool
};

