let numeros = [1000,2,3,59,1,6];
let maior = 0;
for (let i = 0; i < numeros.length; i++) {
    let comparador = numeros [i]
    if (comparador > maior) {
        maior = comparador;
    }
    
}
console.log(maior);