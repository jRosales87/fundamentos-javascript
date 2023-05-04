

const juan = {
    nombre: 'Juan',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - ${ this.edad }`);
    }
}
const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - ${ this.edad }`);
    }
}


// juan.imprimir();

function Persona(nombre, edad = 10) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - ${ this.edad }`);
    }
}

const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);
// console.log(maria);

maria.imprimir();
melissa.imprimir();