import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("dog", "brown");
test.set("lion", "golden");

console.log("has('apple'):", test.has("apple"));     
console.log("has('banana'):", test.has("banana"));   
console.log("has('dog'):", test.has("dog"));         
console.log("has('fish'):", test.has("fish"));       
console.log("has('cat'):", test.has("cat"));         