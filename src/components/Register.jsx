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
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-2">
      <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center min-h-[80vh]">
        <h1 className="text-3xl font-bold text-center mb-8">Crea una cuenta</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-lg p-8 space-y-6 w-full">
          <input
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
            placeholder="Nombre completo"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

          <input
            type="email"
            {...register("email", { required: "El email es obligatorio" })}
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
            placeholder="Correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

          <input
            type="password"
            {...register("password", { required: "La contraseña es obligatoria" })}
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
            placeholder="Contraseña"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

          <button type="submit" className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition">Continuar</button>

          <div className="text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta? <a href="/login" className="text-blue-600 hover:underline">Inicia sesión</a>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-3 text-gray-400 text-sm">o</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 bg-white hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continuar con Google
          </button>
        </form>
        <div className="flex justify-center gap-2 mt-6 text-xs text-gray-400">
          <a href="#" className="hover:underline">Términos de uso</a>
          <span>|</span>
          <a href="#" className="hover:underline">Política de privacidad</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
