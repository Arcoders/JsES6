
const ana = {
  nombre: 'Ismael',
  apellido: 'Haytam'
}

function saludar(veces) {
  for (let i = 0; i < veces; i++) {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}

saludar.call(ana, 3);
