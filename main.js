import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("dog", "brown");

console.log("Antes de clear:");
console.log("  length:", test.length());    
console.log("  capacity:", test.capacity);   
console.log("  get('apple'):", test.get("apple"));  

test.clear();

console.log("\nDespués de clear:");
console.log("  length:", test.length());     
console.log("  capacity:", test.capacity);   
console.log("  get('apple'):", test.get("apple")); 
console.log("  has('apple'):", test.has("apple"));  