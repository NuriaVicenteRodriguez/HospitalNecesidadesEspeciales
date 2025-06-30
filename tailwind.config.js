/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-blue': '#2A6F97', // <-- Añade tus colores personalizados
        'text-panel-label-yellow': '#FFD700', // <-- Si usas este color
        'alpha-num-bg': '#E0E0E0',
        'border-alpha-num': '#A0A0A0'
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/script.js',
    './src/input.css', 
  ],
  theme: {
    extend: {
      colors: {
        // --- Colores para el panel Alpha-Num (sección superior) ---
        'panel-blue-dark': '#00008B',      // Un azul más oscuro para las letras (como header-blue)
        'panel-blue-light': '#0000CD',     // Un azul medio para hover de letras
        'panel-yellow-bright': '#FFD700',  // Amarillo brillante para números
        'panel-yellow-dark': '#DAA520',    // Amarillo más oscuro para hover de números
        'panel-cyan': '#00CED1',           // Cian para "ENFERMERA", "MÉDICO/A"
        'panel-cyan-dark': '#008B8B',      // Cian oscuro para hover de especiales

        // --- Colores para el panel de Pictogramas (sección principal) ---
        // Fila 1: Básicos de respuesta y tiempo (Rojo/Amarillo en la imagen)
        'pictogram-red': '#FF6347',       // Rojo tomate (ajusta para el rojo que quieres en "SÍ", "NO", "A VECES", "¿CUÁNDO?", "¿QUÉ HORA ES?")
        'pictogram-red-text': '#FFFFFF',  // Texto blanco sobre rojo

        'pictogram-green': '#3CB371',     // Verde medio (ajusta para el verde de "DÍA", "NOCHE", "ME ENCUENTRO MEJOR", "ENCENDER", "APAGAR", "QUIERO LEER")
        'pictogram-green-text': '#FFFFFF',// Texto blanco sobre verde

        // Fila 2/3/4/5: Necesidades de higiene, vestir y estado (Azul claro en la imagen)
        'pictogram-blue': '#87CEEB',      // Azul cielo (ajusta para el azul de "PIJAMA", "ZAPATILLAS", "PEINARME", "¿QUÉ HA PASADO?", "CAMISÓN", "PAÑUELOS", "ASEARME", "¿DÓNDE ESTOY?", "BATA", "SÁBANAS", "AFEITARME", "ROPA INTERIOR", "PAÑAL", "IR AL BAÑO")
        'pictogram-blue-text': '#000000', // Texto negro sobre azul claro (ajusta a #FFFFFF si prefieres blanco)

        'pictogram-orange': '#FFA07A',    // Naranja claro (ajusta para el naranja de "PEOR", "MI FAMILIA", "ESTOY ABURRIDO/A", "ESTOY TRISTE", "ESTOY PREOCUPADO/A")
        'pictogram-orange-text': '#000000',// Texto negro sobre naranja claro (ajusta a #FFFFFF si prefieres blanco)

        'pictogram-purple': '#BA55D3',    // Morado medio (ajusta para el morado de "ESTOY EMOCIONADO/A", "ME ENCUENTRO SOLO/A", "ESTOY ENFADADO/A", "ATENCIÓN RELIGIOSA", "TENGO MIEDO")
        'pictogram-purple-text': '#FFFFFF',// Texto blanco sobre morado

        // Otros colores que tenías pero no usas actualmente en script.js,
        // los dejo por si los necesitas en el futuro en HTML directo o para otros propósitos.
        'header-blue': '#00008b',
        'alpha-num-bg': '#0000FF', // Si este es el fondo del contenedor general del alpha-num panel

        // Nota: Los 'panel-xxx' originales de tu config no se usan en tu script.js para pictogramas,
        // por eso los reemplazo por 'pictogram-xxx'. Si los necesitas, fusiona.
        // 'panel-green': '#A8E6CF',
        // 'panel-red': '#FFB3BA',
        // 'panel-light-blue': '#BAE1FF',
        // 'panel-dark-blue': '#ADD8E6',
        // 'panel-yellow': '#FFFFB3',
        // 'panel-gray': '#DCDCDC',
        // 'panel-purple': '#E6BAFF',

        // Colores de texto (si no son pictogram-xxx-text)
        'text-dark': '#000000', // Texto oscuro (negro) - usado para 'pictogram-blue-text' y 'pictogram-orange-text' si son oscuros
        'text-light': '#FFFFFF', // Texto claro (blanco) - usado por 'text-white' en alphaNumPanel
        'text-alpha-num-white': '#FFFFFF',
        'text-panel-label-yellow': '#FFFF00',
        'border-alpha-num': '#0000AA',
      },
      fontSize: {
        'xxs': '0.65rem',
        'xs-custom': '0.75rem',
        'sm-custom': '0.875rem',
        'base-custom': '1rem',
        'lg-custom': '1.125rem',
        'xl-custom': '1.25rem',
        '2xl-custom': '1.5rem',
      }
    },
  },
  plugins: [],
}