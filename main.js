import { HashMap } from "./hashMap.js";

// ============================================
// PRUEBA INTEGRADORA DEL HASHMAP
// ============================================

const test = new HashMap();

// --- FASE 1: Llenar hasta el 0.75 del loadFactor ---
console.log("=== FASE 1: Llenar 12 entradas ===");

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Length:", test.length());            // 12
console.log("Capacity:", test.capacity);          // 16
console.log("Load:", test.length() / test.capacity);  // 0.75

// --- FASE 2: Sobrescribir valores existentes ---
console.log("\n=== FASE 2: Sobrescribir valores ===");

test.set('apple', 'GREEN');    // antes era 'red'
test.set('dog', 'WHITE');      // antes era 'brown'

console.log("get('apple'):", test.get('apple'));   // "GREEN"
console.log("get('dog'):", test.get('dog'));       // "WHITE"
console.log("Length (sigue siendo 12):", test.length());
console.log("Capacity (sigue siendo 16):", test.capacity);

// --- FASE 3: Superar el loadFactor y disparar resize ---
console.log("\n=== FASE 3: Disparar resize ===");

test.set('moon', 'silver');    // la 13ª entrada dispara el resize

console.log("Length:", test.length());            // 13
console.log("Capacity (se ha duplicado):", test.capacity);  // 32
console.log("Load (muy por debajo de 0.75):", test.length() / test.capacity);

// --- FASE 4: Sobrescribir después del resize ---
console.log("\n=== FASE 4: Sobrescribir después del resize ===");

test.set('moon', 'GOLD');      // antes era 'silver'
test.set('lion', 'PLATINUM');  // antes era 'golden'

console.log("get('moon'):", test.get('moon'));     // "GOLD"
console.log("get('lion'):", test.get('lion'));     // "PLATINUM"
console.log("Length (sigue siendo 13):", test.length());

// --- FASE 5: Probar todos los métodos ---
console.log("\n=== FASE 5: Probar todos los métodos ===");

console.log("has('apple'):", test.has('apple'));     // true
console.log("has('fish'):", test.has('fish'));       // false

console.log("remove('apple'):", test.remove('apple')); // true
console.log("remove('fish'):", test.remove('fish'));   // false
console.log("Length después de remove:", test.length()); // 12

console.log("\nkeys():", test.keys());
console.log("\nvalues():", test.values());
console.log("\nentries():", test.entries());

console.log("\n=== FASE 6: clear ===");
test.clear();
console.log("Length después de clear:", test.length());   // 0
console.log("Capacity después de clear:", test.capacity); // 32