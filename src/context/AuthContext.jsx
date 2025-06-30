// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Asegúrate de que la ruta sea correcta

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Función para registrar con email y contraseña
    const signup = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        return data.user; // Supabase devuelve el usuario en data.user
    };

    // Función para iniciar sesión con email y contraseña
    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data.user; // Supabase devuelve el usuario en data.user
    };

    // Función para iniciar sesión con Google
    const loginWithGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin, // Redirige de vuelta a la raíz de tu app después del login de Google
                // Puedes añadir 'scopes' si necesitas permisos adicionales de Google, ej: 'email profile'
            }
        });
        if (error) throw error;
        // Nota: signInWithOAuth no devuelve el usuario directamente en este punto
        // porque el flujo OAuth implica una redirección. El onAuthStateChange lo manejará.
        return data; // Puede devolver { url: "..." } para la redirección
    };

    // Función para cerrar sesión
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setCurrentUser(null); // Asegurarse de limpiar el estado local
    };

    // Observador del estado de autenticación (se ejecuta al cargar la app y cada vez que cambia el usuario)
    useEffect(() => {
        // Suscribe al listener de cambios de estado de autenticación
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setCurrentUser(session?.user || null); // Establece el usuario si hay una sesión, o null
            setLoading(false); // La carga inicial ha terminado
        });

        // Recupera la sesión actual al montar el componente por primera vez
        // Esto es importante para el caso de recarga de página donde ya hay una sesión activa
        supabase.auth.getSession().then(({ data: { session } }) => {
            setCurrentUser(session?.user || null);
            setLoading(false);
        });


        // Limpia el observador al desmontar el componente para evitar fugas de memoria
        return () => {
            if (authListener) {
                authListener.unsubscribe();
            }
        };
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar

    // Valores que se proporcionarán a los componentes que usen este contexto
    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Solo renderiza los hijos una vez que el estado de autenticación inicial se ha cargado */}
        </AuthContext.Provider>
    );
};

// Hook personalizado para consumir el contexto de autenticación fácilmente en otros componentes
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};