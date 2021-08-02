// Exercicio 1
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

// Minha lógica

let linha = 4;
let coluna = linha;

for (let index = 0; index < linha; index++){
     console.log("*".repeat(coluna));
}

console.log(" ");
// Lógica da Trybe

let tamanhoDoQuadrado = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < tamanhoDoQuadrado; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < tamanhoDoQuadrado; lineIndex += 1) {
  console.log(inputLine);
};