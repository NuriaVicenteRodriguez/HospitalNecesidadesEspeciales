// script.js
document.addEventListener('DOMContentLoaded', () => {

    const alphaNumItems = [
        // Letras (27 para un total de 26 letras + Ñ)
        { type: 'alpha', value: 'A' }, { type: 'alpha', value: 'B' }, { type: 'alpha', value: 'C' }, { type: 'alpha', value: 'D' }, { type: 'alpha', value: 'E' },
        { type: 'alpha', value: 'F' }, { type: 'alpha', value: 'G' }, { type: 'alpha', value: 'H' }, { type: 'alpha', value: 'I' }, { type: 'alpha', value: 'J' },
        { type: 'alpha', value: 'K' }, { type: 'alpha', value: 'L' }, { type: 'alpha', value: 'M' }, { type: 'alpha', value: 'N' }, { type: 'alpha', value: 'Ñ' },
        { type: 'alpha', value: 'O' }, { type: 'alpha', value: 'P' }, { type: 'alpha', value: 'Q' }, { type: 'alpha', value: 'R' }, { type: 'alpha', value: 'S' },
        { type: 'alpha', value: 'T' }, { type: 'alpha', value: 'U' }, { type: 'alpha', value: 'V' }, { type: 'alpha', value: 'W' }, { type: 'alpha', value: 'X' },
        { type: 'alpha', value: 'Y' }, { type: 'alpha', value: 'Z' },
        // Números (11 para 0-10)
        { type: 'num', value: '0' }, { type: 'num', value: '1' }, { type: 'num', value: '2' }, { type: 'num', value: '3' }, { type: 'num', value: '4' },
        { type: 'num', value: '5' }, { type: 'num', value: '6' }, { type: 'num', value: '7' }, { type: 'num', value: '8' }, { type: 'num', value: '9' }, { type: 'num', value: '10' },
        // Especiales
        { type: 'special', value: 'ENFERMERA' }, { type: 'special', value: 'MÉDICO/A' }
    ];

    const pictograms = [
        // Fila 1: Básicos de respuesta y tiempo (Rojo/Amarillo en la imagen)
        { text: 'SÍ', icon: '✅', bgColor: 'bg-pictogram-red', textColor: 'text-pictogram-red-text' },
        { text: 'NO', icon: '❌', bgColor: 'bg-pictogram-red', textColor: 'text-pictogram-red-text' },
        { text: 'A VECES', icon: '🔄', bgColor: 'bg-pictogram-red', textColor: 'text-pictogram-red-text' },
        { text: '¿CUÁNDO?', icon: '⏰', bgColor: 'bg-pictogram-red', textColor: 'text-pictogram-red-text' },
        { text: '¿QUÉ HORA ES?', icon: '🕒', bgColor: 'bg-pictogram-red', textColor: 'text-pictogram-red-text' },
        { text: 'DÍA', icon: '☀️', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },
        { text: 'NOCHE', icon: '🌙', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },

        // Fila 2: Necesidades de higiene y vestir (Azul claro en la imagen)
        { text: 'PIJAMA', icon: '👕', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'ZAPATILLAS', icon: '👟', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'QUIERO PEINARME', icon: '💇‍♀️', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: '¿QUÉ HA PASADO?', icon: '❓', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'ME ENCUENTRO MEJOR', icon: '😃', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },
        { text: 'PEOR', icon: '😔', bgColor: 'bg-pictogram-orange', textColor: 'text-pictogram-orange-text' },
        { text: 'ESTOY EMOCIONADO/A', icon: '🤩', bgColor: 'bg-pictogram-purple', textColor: 'text-pictogram-purple-text' },

        // Fila 3: Más higiene y estado (Verde y Morado en la imagen)
        { text: 'CAMISÓN', icon: '👚', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'PAÑUELOS DE PAPEL/CELULOSA', icon: '🤧', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' }, // Usé un emoji de estornudo para pañuelos
        { text: 'QUIERO ASEARME', icon: '🛁', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: '¿DÓNDE ESTOY?', icon: '📍', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'ENCENDER', icon: '💡', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },
        { text: 'APAGAR', icon: '💡', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },
        { text: 'ESTOY TRISTE', icon: '😢', bgColor: 'bg-pictogram-orange', textColor: 'text-pictogram-orange-text' },
        { text: 'ME ENCUENTRO SOLO/A', icon: '🧑‍🤝‍🧑', bgColor: 'bg-pictogram-purple', textColor: 'text-pictogram-purple-text' }, // Otro emoji de ejemplo

        // Fila 4: Vestir, afeitar y baño (Naranja y otros en la imagen)
        { text: 'BATA', icon: '🧥', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'CAMBIO DE SÁBANAS', icon: '🛏️', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'QUIERO AFEITARME', icon: '🪒', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'MI FAMILIA', icon: '👨‍👩‍👧‍👦', bgColor: 'bg-pictogram-orange', textColor: 'text-pictogram-orange-text' },
        { text: 'ENCENDER / APAGAR (TV)', icon: '📺', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },
        { text: 'ESTOY ABURRIDO/A', icon: '😩', bgColor: 'bg-pictogram-orange', textColor: 'text-pictogram-orange-text' },
        { text: 'ESTOY ENFADADO/A', icon: '😡', bgColor: 'bg-pictogram-purple', textColor: 'text-pictogram-purple-text' },

        // Fila 5: Más vestir, baño y otros (Rosa y Morado en la imagen)
        { text: 'ROPA INTERIOR', icon: '🩲', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'CAMBIO DE PAÑAL O COMPRESAS', icon: '👶', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' }, // Otro emoji para pañal
        { text: 'IR AL BAÑO', icon: '🚽', bgColor: 'bg-pictogram-blue', textColor: 'text-pictogram-blue-text' },
        { text: 'ATENCIÓN RELIGIOSA', icon: '🙏', bgColor: 'bg-pictogram-purple', textColor: 'text-pictogram-purple-text' },
        { text: 'QUIERO LEER', icon: '📚', bgColor: 'bg-pictogram-green', textColor: 'text-pictogram-green-text' },
        { text: 'ESTOY PREOCUPADO/A', icon: '😟', bgColor: 'bg-pictogram-orange', textColor: 'text-pictogram-orange-text' },
        { text: 'TENGO MIEDO', icon: '😨', bgColor: 'bg-pictogram-purple', textColor: 'text-pictogram-purple-text' },
    ];

    const communicationPanel = document.getElementById('communication-panel');
    const alphaNumPanel = document.getElementById('alpha-num-panel');

    // Función para renderizar el panel de letras y números
    function renderAlphaNumPanel() {
        if (!alphaNumPanel) {
            console.error("Element with ID 'alpha-num-panel' not found.");
            return;
        }
        alphaNumPanel.innerHTML = ''; // Limpiar panel antes de renderizar

        alphaNumItems.forEach(item => {
            const div = document.createElement('div');
            // Clases base para todos los items
            div.classList.add(
                'flex', 'items-center', 'justify-center', 'font-bold', 'text-sm', 'md:text-base', 'p-1', 'rounded-sm', 'cursor-pointer',
                'shadow-sm', 'transition-all', 'duration-150', 'hover:scale-105', 'hover:shadow-md'
            );

            // Clases de color específicas según el tipo de elemento
            if (item.type === 'alpha') {
                div.classList.add('bg-panel-blue-dark', 'text-white', 'hover:bg-panel-blue-light');
            } else if (item.type === 'num') {
                div.classList.add('bg-panel-yellow-bright', 'text-gray-800', 'hover:bg-panel-yellow-dark');
            } else if (item.type === 'special') {
                div.classList.add('bg-panel-cyan', 'text-white', 'hover:bg-panel-cyan-dark', 'col-span-2'); // Ampliado para abarcar 2 columnas
            }
            div.textContent = item.value;
            div.addEventListener('click', () => {
                alert(`Has seleccionado: ${item.value}`);
            });
            alphaNumPanel.appendChild(div);
        });
    }

    // Función para renderizar el panel de pictogramas
    function renderCommunicationPanel() {
        if (!communicationPanel) {
            console.error("Element with ID 'communication-panel' not found.");
            return;
        }
        communicationPanel.innerHTML = ''; // Limpiar panel antes de renderizar

        pictograms.forEach(p => {
            const card = document.createElement('div');
            // Clases base para todos los pictogramas
            card.classList.add(
                'flex', 'flex-col', 'items-center', 'justify-center', 'text-center',
                'p-2', 'rounded-md', 'cursor-pointer', 'transition-all', 'duration-200',
                'shadow-md', 'hover:scale-103', 'hover:shadow-lg',
                p.bgColor, // Fondo personalizado de Tailwind
                p.textColor // Texto personalizado de Tailwind
            );
            card.innerHTML = `
                <div class="text-4xl md:text-5xl mb-1 icon">${p.icon}</div>
                <div class="text-xs sm:text-sm font-semibold text">${p.text}</div>
            `;
            card.addEventListener('click', () => {
                alert(`Comunicación: ¡${p.text}!`);
            });
            communicationPanel.appendChild(card);
        });
    }

    // Llamar a las funciones para renderizar ambos paneles al cargar la página
    renderAlphaNumPanel();
    renderCommunicationPanel();
});