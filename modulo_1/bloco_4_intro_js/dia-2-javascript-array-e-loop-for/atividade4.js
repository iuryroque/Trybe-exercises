let numeros = [0,1,100,5,200,6,8,10]
let media, sum = 0;

for (let i = 0; i < numeros.length; i++) {
	sum = sum + numeros[i];
	media = sum / numeros.length;	
}
if (media > 20) {
    console.log("Valor da media maior que 20, media = " + media);    
}else{
    console.log("Valor da media menor ou igual 20, media = " + media);  
}
