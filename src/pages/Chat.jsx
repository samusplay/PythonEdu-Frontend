import Chatbot from "../components/Chatbot";

export default function ChatPage(){
    return(
        <div className="flex flex-col h-screen">
            <header className="p-4 bg-white shadow">
                <h1 className="text-2x1 font-bold">Asistente PythonEdu</h1>
            </header>
            <main className="flex-grow p-4 overflow-auto">
                <Chatbot />
            </main>
        </div>
    )
}