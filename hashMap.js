class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    // Método hash(key) devuelve un índice basado en la clave proporcionada
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    // Método set(key, value) agrega un par clave-valor al HashMap
    set(key, value) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.buckets[index] === undefined) {
            this.buckets[index] = [[key, value]];
            this.size++;
        } else {
            const bucket = this.buckets[index];
            let found = false;

            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket[i][1] = value;
                    found = true;
                    break;
                }
            }

            if (!found) {
                bucket.push([key, value]);
                this.size++;
            }
        }

        if (this.size / this.capacity > this.loadFactor) {
            this._resize();
        }
    }

    _resize() {
        const oldBuckets = this.buckets;  // Guardar los buckets antiguos
        this.capacity = this.capacity * 2;  // Duplicar la capacidad
        this.buckets = new Array(this.capacity); //crear array de nuevos buckets
        this.size = 0; // Reiniciar el tamaño

        // Recorrer los buckets viejos y reinsertar cada par clave-valor
        for (const bucket of oldBuckets) {
            if (bucket !== undefined) {
                for (const [key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }

    get(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];

        if (bucket === undefined) {
            return undefined;
        }

        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }

        return undefined;


    }
    has(key) {
        return this.get(key) !== undefined;
    }

    // Método remove(key) elimina un par clave-valor del HashMap

    remove(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];

        if (bucket === undefined) {
            return false;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }

        return false;
    }

    // Método length() devuelve el número de pares clave-valor en el HashMap
    length() {
        return this.size;
    }

    // Método clear() elimina todas las entradas del HashMap

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    // Método key() devuelve un array con todas las claves del HashMap

    keys() {
        const result = [];

        for (const bucket of this.buckets) {
            if (bucket !== undefined) {
                for (const [key, _] of bucket) {
                    result.push(key);
                }
            }
        }
        return result;
    }

    // Método values() devuelve un array con todos los valores del HashMap

    values() {
        const result = [];

        for (const buket of this.buckets) {
            if (buket !== undefined) {
                for (const [, value] of buket) {
                    result.push(value);
                }
            }
        }
        return result;
    }
    //Métod entries() devuelve un array con todos los pares clave-valor del HashMap

    entries() {
        const result = [];
    
        for (const bucket of this.buckets) {
            if (bucket !== undefined) {       
                for (const pair of bucket) {
                    result.push(pair);
                }
            }
        }
    
        return result;
    }







}


export { HashMap };