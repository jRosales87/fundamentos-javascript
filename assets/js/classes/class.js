

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log( this.nombre );
        console.log('Soy un mensaje estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
        // console.log('Hola!');
        this.nombre = nombre;
        this.frase = frase;
        this.codigo = codigo;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identitad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Esta es la frase de Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(ironman);

// spiderman.quienSoy();
// ironman.quienSoy();
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pastel de cereza de la tía May';
// spiderman.nemesis = 'Duende verde';
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);


console.log('Conteo estátivo', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log(Persona);
console.log(Persona.propiedadExterna);