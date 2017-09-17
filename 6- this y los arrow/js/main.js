
const suma = (...numeros) => numeros.reduce((acum, numero) => {
    return acum += numero
},0);

const dobles = (...numeros) => numeros.map(numero => numero * 2)

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

console.log(suma(2, 5, 6, 8));
console.log(dobles(9, 7, 3, 1));
console.log(pares(3, 4, 10, 12));
