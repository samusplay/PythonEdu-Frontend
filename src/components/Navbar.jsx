import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">PythonEdu</span>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Inicio</Link>
        <Link to="/registro" className="text-base font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-100 transition">Registro</Link>
      </div>
    </nav>
  );
}