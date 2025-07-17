import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="p-4 bg-white shadow-md flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">PythonEdu</Link>
            <div>
                <Link to ="/" className="hover:underline">Inicio</Link>
                <Link to ="/Registro" className="hover:underline">Registro</Link>
            </div>
        </nav>
    );
}