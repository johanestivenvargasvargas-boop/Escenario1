const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin', 'utf-8'));
const respuestas = ["even", "odd"];
console.log(respuestas[Math.abs(n) % 2]);
