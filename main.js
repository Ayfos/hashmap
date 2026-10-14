import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("dog", "brown");

console.log("Size inicial:", test.size);          

console.log("remove('apple'):", test.remove("apple"));   
console.log("Size después:", test.size);          
console.log("get('apple'):", test.get("apple"));  

console.log("remove('fish'):", test.remove("fish"));     
console.log("Size sigue:", test.size);            