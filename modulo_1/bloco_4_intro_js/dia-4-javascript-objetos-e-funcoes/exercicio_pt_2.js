//1ª Atividade
function invertePalavra(palavra) {
  let palavraInvertida = palavra.split("").reverse().join("")

  if (palavraInvertida === palavra) {
    return true
  } else {
    return false
  }
}

console.log(invertePalavra("arara"));

//2ª Atividade

function indiceMaior(array) {
  
  let maior = 0;
  let indiceNumero = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maior) {
      maior = array[index];
      indiceNumero = index;
    }
  }
  return indiceNumero;
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]));