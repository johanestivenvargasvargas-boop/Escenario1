# Par o Impar (Sin Condicionales)

Programa que determina si un número entero es par (`even`) o impar (`odd`) **sin utilizar estructuras condicionales** (`if`, `else`, operador ternario, etc.).

## 📝 Descripción

- **Entrada:** Un número entero.
- **Salida:** `even` si el número es par, u `odd` si es impar.

### Ejemplo
- **Entrada:** `126`
- **Salida:** `even`

---

## 💡 Lógica de la Solución

Para evitar el uso de condicionales, aprovechamos el operador módulo (`%`) y la indexación de un arreglo:

1. Calculamos el residuo de dividir el número entre 2: `Math.abs(n) % 2`.
2. El resultado siempre será:
   - `0` para números pares.
   - `1` para números impares.
3. Usamos ese número directo como índice del arreglo `["even", "odd"]`.

---

## 🚀 Código en JavaScript (Node.js)

```javascript
const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin', 'utf-8'));
const respuestas = ["even", "odd"];
console.log(respuestas[Math.abs(n) % 2]);
