import { useForm } from 'react-hook-form';
import { registerUser } from '../services/authService';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try{
      const response=await registerUser(data);
      console.log('usuario creado:',response);
    }catch(error){
      console.error('Errror al registrar:',error.response?.data ||error.message);
    }

    // Axios para consumir la api con el metodo POST
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          {...register("name", { required: "El nombre es obligatorio" })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", { required: "El email es obligatorio" })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Contraseña</label>
        <input
          type="password"
          {...register("password", { required: "La contraseña es obligatoria" })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Registrarse
      </button>
    </form>
  );
};

export default Register;
