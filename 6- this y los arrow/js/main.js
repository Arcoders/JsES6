
class Persona {

    constructor(nombre, amigos = []) {
        this.nombre = nombre;
        this.amigos = amigos;
    }

    listarAmigos() {
        this.amigos.forEach(amigo => console.log(`${this.nombre} amigo de ${amigo}`));
    }

}

const ismael = new Persona('Ismael', ['Moha', 'victor']);
ismael.listarAmigos();
