import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ChatPage from './pages/Chat';
import Home from './pages/Home';
import Registro from './pages/Registro';
function App() {
  const location=useLocation();
  const isChat=location.pathname === '/chat';
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sólo muestro el Navbar si NO estoy en /chat */}
      { !isChat && <Navbar /> }

      <main className={ isChat ? 'flex-grow h-screen' : 'flex-grow' }>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/chat"     element={<ChatPage />} />
        </Routes>
      </main>

      {/* Sólo muestro el Footer si NO estoy en /chat */}
      { !isChat && <Footer /> }
    </div>
  );
  
}

export default App
