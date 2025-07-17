import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registro from './pages/Registro';
function App() {
  
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
  
}

export default App
