v// src/components/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Asegúrate de que la ruta sea correcta

function Dashboard() {
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            alert("Hubo un error al cerrar sesión.");
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Bienvenido/a, {currentUser?.email || 'Usuario'}!</h2>
            {/* Supabase almacena información adicional del usuario en user_metadata */}
            {currentUser && currentUser.user_metadata?.full_name && (
                 <p className="text-gray-600 mb-4">Nombre: {currentUser.user_metadata.full_name}</p>
            )}
            <p className="text-gray-600 mb-6">¡Has iniciado sesión correctamente!</p>
            
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Cerrar Sesión
            </button>
        </div>
    );
}

export default Dashboard;