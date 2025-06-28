// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './js/script.js',
    './src/input.css', // Asegúrate de que esta ruta sea correcta si tu input.css está en src/
  ],
  theme: {
    extend: {
      colors: {
        // Colores de fondos principales
        'header-blue': '#00008b', // Azul oscuro para la cabecera (texto vertical)
        'alpha-num-bg': '#0000FF', // Azul vibrante para el panel de letras/números
        
        // Colores para pictogramas y botones (ajusta si tus nombres son diferentes)
        'custom-red': '#FF0000', // Sí (rojo brillante)
        'custom-pink': '#FFC0CB', // NO (rosa claro)
        'custom-light-blue': '#ADD8E6', // A VECES (azul claro)
        'custom-orange': '#FFA500', // ¿CUÁNDO?, DIA (naranja)
        'custom-dark-blue': '#000080', // ¿QUÉ HORA ES?, NOCHE (azul oscuro)
        'custom-green': '#008000', // ME ENCUENTRO MEJOR, Estoy emocionado/a, etc. (verde)
        'custom-yellow': '#FFFF00', // PIJAMA, ZAPATILLAS, etc. (amarillo)
        'custom-gray': '#808080', // PEOR, ESTOY TRISTE, ESTOY ABURRIDO/A (gris)
        'custom-purple': '#800080', // Estoy solo/a, Tengo miedo (morado)
        
        // Colores específicos para texto en pictogramas (si es necesario)
        'text-alpha-num': '#FFFFFF', // Blanco para letras/números
        'text-panel-label': '#FFFF00', // Amarillo para "PANEL DE COMUNICACIÓN"
      },
      fontSize: {
        'xxs': '0.65rem',
        'xs-custom': '0.75rem', // Puedes definir más tamaños si los necesitas
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