import { useState } from 'react';

export default function Chatbot({onClose}){
    const[messages,setMessages]=useState([
        {from:'bot',text:'!hola ¿En que proyecto estás  trabajando hoy'}
    ]);
    const [input,setInput]=useState('');

    const sendMessage=()=>{
        if(!input) return;
        setMessages(msgs=>[...msgs,{from:'user',text:input}]);
        //Aqui llamaremos la api de Chatbot o refactorizar 
        setInput('');
    };

    return(
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
            <header className="p-2 border-b flex justify-between items-center">
                <span className="font-bold">Python Edu Bot</span>
                <button onClick={onClose}>&times;</button>
            </header>
            <div className="flex-grow p-2 overflow-y-auto">
                {messages.map((m, i)=>(
                    <div key={i} className={m.from=='bot' ? 'text-left':'text-right'}>
                         <span className={`inline-block py-1 px-2 rounded-lg ${m.from === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
                        {m.text}
                    </span>
                    </div>
                ))}
            </div>
            <footer className="p-2 border-t flex">
                <input 
                className="flex-grow border rounded-l px-2"
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder='Escribe tu mensaje . . .' 
                />
                <button className="bg-blue-600 text-white px-4 rounded-r" onClick={sendMessage}>
                    Enviar
                </button>
            </footer>
        </div>
    )
}
