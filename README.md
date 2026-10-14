# HashMap & HashSet

Implementación de un HashMap y un HashSet en JavaScript, desarrollada como parte del currículo de [The Odin Project](https://www.theodinproject.com/).

## ¿Qué es un HashMap?

Un HashMap es una estructura de datos que almacena pares **clave-valor** y permite acceder a ellos de forma muy rápida mediante una **función hash**.

```
"apple"  → "red"
"banana" → "yellow"
"dog"    → "brown"
```

- **Función hash**: convierte la clave en un número (índice).
- **Buckets**: array donde se guardan los pares.
- **Colisión**: dos claves distintas que caen en el mismo bucket.
- **Load factor**: umbral que dispara el crecimiento (0.75).
- **Resize**: duplicar la capacidad y redistribuir cuando se supera el load factor.

## ¿Qué es un HashSet?

Un HashSet es como un HashMap, pero **solo guarda claves** (sin valores). Sirve para responder rápido a la pregunta "¿está este elemento en la colección?".

## Estructura del proyecto

- `hashMap.js` — Clase `HashMap` con todos sus métodos.
- `hashSet.js` — Clase `HashSet` usando composición sobre `HashMap`.
- `main.js` — Prueba integradora del proyecto.
- `package.json` — Configuración para módulos ES6.

## Clase `HashMap`

### Propiedades

- `capacity` — Tamaño actual del array de buckets (empieza en 16).
- `loadFactor` — Umbral de carga (0.75).
- `buckets` — Array donde se almacenan los pares.
- `size` — Número total de entradas.

### Métodos

| Método | Descripción |
|---|---|
| `hash(key)` | Genera el índice hash de una clave. |
| `set(key, value)` | Añade o actualiza un par clave-valor. |
| `get(key)` | Devuelve el valor asociado a una clave. |
| `has(key)` | ¿Existe la clave? |
| `remove(key)` | Elimina un par clave-valor. |
| `length()` | Número de entradas. |
| `clear()` | Elimina todas las entradas. |
| `keys()` | Array con todas las claves. |
| `values()` | Array con todos los valores. |
| `entries()` | Array de pares `[key, value]`. |
| `_resize()` | Duplica la capacidad y redistribuye (interno). |

## Clase `HashSet`

### Métodos

| Método | Descripción |
|---|---|
| `add(key)` | Añade una clave al set. |
| `has(key)` | ¿Existe la clave? |
| `remove(key)` | Elimina una clave. |
| `length()` | Número de claves. |
| `clear()` | Elimina todas las claves. |
| `keys()` | Array con todas las claves. |

## Cómo ejecutar

```bash
node main.js
```

## Ejemplo de uso

```javascript
import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

// HashMap
const map = new HashMap();
map.set("apple", "red");
map.set("banana", "yellow");

console.log(map.get("apple"));    // "red"
console.log(map.has("banana"));   // true
console.log(map.length());        // 2

// HashSet
const set = new HashSet();
set.add("apple");
set.add("banana");
set.add("apple");   // duplicado, ignorado

console.log(set.length());        // 2
console.log(set.has("apple"));    // true
```

## Aprendizajes

- Funciones hash y su papel en el acceso rápido.
- Manejo de colisiones dentro de un bucket.
- Redimensionamiento dinámico con `_resize`.
- Cálculo del load factor.
- Composición de clases (HashSet sobre HashMap).
- Módulos ES6 en Node.

## Recursos

- [The Odin Project - HashMap](https://www.theodinproject.com/lessons/javascript-hashmap)
- [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)