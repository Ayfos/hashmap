import { HashMap } from "./hashMap.js";

const test = new HashMap();

console.log("hash('apple'):", test.hash("apple"));
console.log("hash('banana'):", test.hash("banana"));
console.log("hash('cat'):", test.hash("cat"));
console.log("hash('dog'):", test.hash("dog"));

