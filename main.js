import { HashMap } from "./hashMap.js";

const test = new HashMap();

// Añadir 12 entradas (llenan 12/16 = 0.75 → justo en el límite)
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Antes del resize:");
console.log("Capacity:", test.capacity);
console.log("Size:", test.size);
console.log("Load:", test.size / test.capacity);

// Añadir una más → dispara el resize
test.set("moon", "silver");

console.log("\nDespués del resize:");
console.log("Capacity:", test.capacity);
console.log("Size:", test.size);
console.log("Load:", test.size / test.capacity);

console.log("\nBuckets después del resize:");
test.buckets.forEach((bucket, i) => {
    if (bucket !== undefined) {
        console.log(`[${i}]:`, JSON.stringify(bucket));
    }
});