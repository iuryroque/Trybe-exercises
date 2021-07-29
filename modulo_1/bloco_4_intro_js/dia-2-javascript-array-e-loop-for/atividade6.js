let numeros = [1000,2,3,59,1,6];
let menor = numeros[1];
for (let i = 0; i < numeros.length; i++) {
    let comparador = numeros [i]
    if (comparador < menor) {
        menor = comparador;
    }
}
console.log(menor);