let numeros = [1000,2,3,59,1,6];
let impar = 0;

for (let i = 0; i < numeros.length; i++) {
    if ((numeros[i]%2) === 0) {
        impar = impar + 1;
    }
}
console.log("Quantidade de numero impar: " + impar);