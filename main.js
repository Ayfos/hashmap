import { HashSet } from "./hashSet.js";

const set = new HashSet();

set.add("apple");
set.add("banana");
set.add("carrot");
set.add("apple");   // duplicado, no debería añadirse dos veces

console.log("length:", set.length());      // 3
console.log("has('apple'):", set.has("apple"));     // true
console.log("has('fish'):", set.has("fish"));       // false

console.log("remove('apple'):", set.remove("apple"));  // true
console.log("remove('fish'):", set.remove("fish"));    // false
console.log("length después de remove:", set.length()); // 2

console.log("keys():", set.keys());

set.clear();
console.log("length después de clear:", set.length());  // 0