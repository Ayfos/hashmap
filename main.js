import { HashMap } from "./hashMap.js";

const test = new HashMap();

console.log("length inicial:", test.length());  // 0

test.set("apple", "red");
test.set("banana", "yellow");
test.set("dog", "brown");

console.log("length después de 3 sets:", test.length());  

test.remove("apple");

console.log("length después de remove:", test.length());  

test.set("apple", "red");   // re-añadir

console.log("length después de re-añadir:", test.length());  

test.set("apple", "GREEN");  // sobrescribir (no añade)

console.log("length después de sobrescribir:", test.length());  