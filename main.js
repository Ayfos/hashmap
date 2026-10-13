import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("cat", "brown");

console.log("Size:", test.size);
console.log("Buckets:", JSON.stringify(test.buckets, null, 2));

