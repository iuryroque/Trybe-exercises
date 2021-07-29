let numeros = [0,1,3,5,4,6,8,10]
let media, sum = 0;

for (let i = 0; i < numeros.length; i++) {
	sum = sum + numeros[i];
	media = sum / numeros.length;	
}
console.log("A media aritmética dos numero é: " + media);