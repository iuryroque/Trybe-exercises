// Questão 1 
document.getElementById("previsao").innerText = "Empregado em TI";
// Questão 2
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
// Questão 3
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
// Questão 4
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
// Questão 5
function upperCase(tag){
    let element = document.getElementsByTagName(tag)
    for (let i = 0; i < element.length; i += 1){
        element[i].style.textTransform = 'uppercase'
    }
}upperCase("p");
