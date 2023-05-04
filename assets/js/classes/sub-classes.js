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


class Heroe extends Persona{
    clan = 'sin clan';

    constructor( nombre, codigo, frase ) {
        super(nombre, codigo, frase);

        this.clan = 'Los vengadores';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Esta es la frase de Spiderman');
// const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();

