//1ª Atividade
function invertePalavra(palavra) {
  let palavraInvertida = palavra.split("").reverse().join("")

  if (palavraInvertida === palavra) {
    return true
  } else {
    return false
  }
}

console.log("A palavra é " + invertePalavra("arara") + " que a palavra é um palindromo.");
console.log("");
//2ª Atividade

function indiceMaior(arrayMaior) {
  
  let maior = 0;
  let indiceNumero = 0;
  for (let index = 0; index < arrayMaior.length; index++) {
    if (arrayMaior[index] > maior) {
      maior = arrayMaior[index];
      indiceNumero = index;
    }
  }
  return indiceNumero;
}

console.log("O menor indice é o: " + indiceMaior([2, 3, 6, 7, 10, 1]));
console.log("");

//3ª Atividade

function indiceMenor(arrayMenor) {
  let menor = 0;
  for (let key in arrayMenor) {
    if (arrayMenor[key] < menor){
      menor = key;
    }
  }
  return menor;  
}

console.log("O maior indice é o: " + indiceMenor([2, 4, 6, 7, 10, 0, -3]));