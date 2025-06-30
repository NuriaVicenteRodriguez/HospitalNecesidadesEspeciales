// src/components/AuthForm.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Asegúrate de que la ruta sea correcta

function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // true para login, false para registro
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup, login, loginWithGoogle } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await signup(email, password);
                // Supabase por defecto requiere verificación por email.
                // Podrías mostrar un mensaje diferente aquí.
                alert('¡Registro exitoso! Por favor, revisa tu correo para confirmar tu cuenta.');
            }
        } catch (err) {
            console.error("Error de autenticación:", err);
            // Mensajes de error específicos de Supabase/Postgrest
            if (err.message.includes("AuthApiError: Email not confirmed")) {
                 setError("Email no confirmado. Por favor, revisa tu bandeja de entrada.");
            } else if (err.message.includes("AuthApiError: Invalid login credentials")) {
                setError("Credenciales inválidas. Email o contraseña incorrectos.");
            } else if (err.message.includes("AuthApiError: User already registered")) {
                setError("Este email ya está registrado. ¿Quieres iniciar sesión?");
            } else if (err.message.includes("AuthApiError: Password should be at least 6 characters")) {
                setError("La contraseña debe tener al menos 6 caracteres.");
            }
            else {
                setError(err.message || "Fallo en la autenticación. Por favor, inténtalo de nuevo.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            await loginWithGoogle();
            // Para signInWithOAuth, Supabase redirige la página, por lo que este código
            // después del 'await' solo se ejecutaría si hay un error antes de la redirección.
            // El AuthContext.js es el que detectará el cambio de usuario tras la redirección.
        } catch (err) {
            console.error("Error de autenticación con Google:", err);
            // Manejo específico para el popup cerrado por el usuario (si aplica al flujo de Supabase)
            if (err.message.includes("User cancelled the flow")) {
                setError("El inicio de sesión con Google fue cancelado.");
            } else {
                setError(err.message || "Fallo al iniciar sesión con Google. Por favor, inténtalo de nuevo.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </h2>

            {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="tu@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        disabled={loading}
                    >
                        {loading ? 'Cargando...' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
                    </button>
                </div>
            </form>

            <div className="text-center mt-4">
                <button
                    className="text-blue-500 hover:text-blue-800 text-sm"
                    onClick={() => setIsLogin(!isLogin)}
                    disabled={loading}
                >
                    {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
                </button>
            </div>

            <div className="border-t border-gray-300 my-6"></div> {/* Separador */}

            <button
                onClick={handleGoogleLogin}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center space-x-2"
                disabled={loading}
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_gmail_2020.svg" alt="Google logo" className="h-5 w-5" />
                <span>{loading ? 'Cargando...' : 'Continuar con Google'}</span>
            </button>
        </div>
    );
}

export default AuthForm;