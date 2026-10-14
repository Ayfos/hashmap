import { HashMap } from "./hashMap.js";

class HashSet {
    constructor() {
        // El HashSet usa un HashMap internamente
        // El valor asociado a cada clave es irrelevante (usamos `true`)
        this.map = new HashMap();
    }

    // Añade una clave al set (sin valor)
    add(key) {
        this.map.set(key, true);
    }

    // ¿Existe la clave?
    has(key) {
        return this.map.has(key);
    }

    // Elimina la clave
    remove(key) {
        return this.map.remove(key);
    }

    // Número de claves
    length() {
        return this.map.length();
    }

    // Vacía el set
    clear() {
        this.map.clear();
    }

    // Array con todas las claves
    keys() {
        return this.map.keys();
    }
}

export { HashSet };