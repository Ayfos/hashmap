import { HashMap } from "./hashMap.js";

const test = new HashMap();

// Colisión: "dog" y "lion" dan hash 12
test.set("dog", "brown");
test.set("lion", "golden");

console.log("Size:", test.size);
console.log("Bucket 12:", JSON.stringify(test.buckets[12], null, 2));

// Actualización: "dog" ya existe, se sobrescribe el valor
test.set("dog", "BLACK");

console.log("\nDespués de actualizar 'dog':");
console.log("Size:", test.size);
console.log("Bucket 12:", JSON.stringify(test.buckets[12], null, 2));