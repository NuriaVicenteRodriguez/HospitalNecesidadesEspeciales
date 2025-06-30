// src/App.jsx
import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import AuthForm from './components/AuthForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import MainContain from './MainContain.jsx'; // Asegúrate de que la ruta y la extensión sean correctas

// Este componente AppContent usa el contexto para decidir qué renderizar
function AppContent() {
    const { currentUser, loading } = useAuth(); // Obtiene el estado del usuario y si está cargando

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-lg text-gray-700">Cargando sesión de usuario...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {/* Si NO hay usuario logeado, muestra el formulario de autenticación */}
            {!currentUser && <AuthForm />}

            {/* Si SÍ hay usuario logeado, muestra el Dashboard y luego tu MainContain (los paneles) */}
            {currentUser && (
                <>
                    <Dashboard />
                    <MainContain />
                </>
            )}
        </div>
    );
}

// El componente App envuelve toda la lógica dentro del AuthProvider
function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;