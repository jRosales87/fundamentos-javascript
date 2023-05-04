

class Singleton {
    
    static #instacia;
    nombre = "";

    constructor( nombre = '') {
        
        if ( !!Singleton.#instacia ){
            return Singleton.#instacia;
        }

        Singleton.#instacia = this;
        this.nombre = nombre;

        return this;

    }

}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');


console.log(`Nombre en la instancia1 es: ${instacia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instacia2.nombre}`);