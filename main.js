import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("dog", "brown");
test.set("lion", "golden");

console.log("get('apple'):", test.get("apple"));
console.log("get('banana'):", test.get("banana"));
console.log("get('dog'):", test.get("dog"));
console.log("get('lion'):", test.get("lion"));
console.log("get('fish'):", test.get("fish"));