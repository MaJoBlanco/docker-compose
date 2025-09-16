const fs = require('fs');

const total = 20000; // número de filas
let data = 'id,nombre,edad\n'; // cabecera del CSV

for (let i = 1; i <= total; i++) {
  const nombre = `Persona_${i}`;
  const edad = Math.floor(Math.random() * 60) + 18; // edades aleatorias entre 18 y 77
  data += `${i},${nombre},${edad}\n`;
}

fs.writeFileSync('personas.csv', data);
console.log(`✅ Archivo personas.csv generado con ${total} registros`);
