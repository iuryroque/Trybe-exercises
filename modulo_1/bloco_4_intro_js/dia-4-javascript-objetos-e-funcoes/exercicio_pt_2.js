function invertePalavra(palavra) {
  let palavraInvertida = palavra.split("").reverse().join("")

  if (palavraInvertida === palavra) {
    return true
  } else {
    return false
  }
}

console.log(invertePalavra("arara")); 
