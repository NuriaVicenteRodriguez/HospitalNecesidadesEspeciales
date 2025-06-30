// src/MainContain.js
import React from 'react';
// Si tu script.js tenía lógica importante para los paneles,
// tendrás que convertir esa lógica a React hooks (useEffect, useState) aquí.
// No importes directamente un archivo JS tradicional aquí, React no lo usará así.

function MainContain() {
    return (
        <div id="main-container" className="h-full flex flex-col md:flex-row bg-gray-100">

            <header className="bg-header-blue text-white p-4 md:w-1/4 flex flex-col justify-between">
                <h1 className="text-2xl font-bold text-center mb-4">Comunicación Asistida</h1>
                <div className="flex-grow flex items-center justify-center">
                    {/* Asegúrate de que la ruta de la imagen sea correcta para Vite. 
                        Si 'arbol.png' está en la carpeta 'public' de tu proyecto, usa '/arbol.png' */}
                    <img src="/arbol.png" alt="Imagen de árbol" className="max-w-full h-auto" />
                </div>
                <div className="text-center mt-4">
                    <p>Hospital Universitario</p>
                    <p>Información de Contacto</p>
                </div>
            </header>

            <main className="flex-1 p-4 md:p-8 overflow-y-auto min-h-0">

                <div id="sticky-alpha-num-wrapper"
                     className="relative z-10 bg-white shadow-lg rounded-lg p-4 mb-8 sticky top-0">
                    <h2 className="text-center text-xl md:text-2xl font-bold mb-4 text-text-panel-label-yellow">PANEL ALFANUMÉRICO</h2>
                    <div id="alpha-num-panel" className="grid grid-cols-8 gap-2 md:gap-3 bg-alpha-num-bg p-3 rounded-md border-2 border-border-alpha-num">
                        {/* Aquí irían los componentes o lógica de React para tu panel alfanumérico */}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
                    <h2 className="text-center text-xl md:text-2xl font-bold mb-4 text-blue-800">PANEL DE COMUNICACIÓN</h2>
                    <div id="communication-panel" className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                        {/* Aquí irían los componentes o lógica de React para tu panel de comunicación */}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
                    <h2 className="text-center text-xl md:text-2xl font-bold mb-4 text-purple-800">PANEL DE NECESIDADES Y SENSACIONES</h2>
                    <div id="communication-panel-2" className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                        {/* Aquí irían los componentes o lógica de React para tu panel de necesidades */}
                    </div>
                </div>

                {/* El resto de tu contenido estático, convertido a JSX */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg shadow-inner h-64 flex items-center justify-center text-center">
                    <p className="text-gray-700 text-lg font-semibold">
                        ¡Haz scroll hacia abajo! El panel alfanumérico debería quedarse fijo.
                    </p>
                </div>
                <div className="mt-8 p-4 bg-green-50 rounded-lg shadow-inner h-64 flex items-center justify-center text-center">
                    <p className="text-gray-700 text-lg font-semibold">
                        Más contenido para generar scroll y probar el efecto sticky.
                    </p>
                </div>
                <div className="mt-8 p-4 bg-red-50 rounded-lg shadow-inner h-64 flex items-center justify-center text-center">
                    <p className="text-gray-700 text-lg font-semibold">
                        Continúa haciendo scroll...
                    </p>
                </div>
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg shadow-inner h-64 flex items-center justify-center text-center">
                    <p className="text-gray-700 text-lg font-semibold">
                        Y el panel sigue fijo.
                    </p>
                </div>

            </main>
        </div>
    );
}

export default MainContain;