import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registro from './pages/Registro';
function App() {
  
  return (
   <>
      <Navbar />

      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
  
}

export default App
