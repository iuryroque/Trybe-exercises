//Atividade 1
let h1 = document.createElement("h1");
h1.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(h1);
//Atividade 2
let main = document.createElement("main");
main.className = "main-content";
document.body.appendChild(main);
//Atividade 3
let section1 = document.createElement("section");
section1.className = "center-content";
main.appendChild(section1);
//Atividade 4
let p = document.createElement("p");
p.className = "left-content";
main.appendChild(p);
//Atividade 5
let section2 = document.createElement("section");
section2.className = "left-content";
main.appendChild(section2);
//Atividade 6
let section3 = document.createElement("section");
section3.className = "right-content";
main.appendChild(section3);
//Atividade 7
let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image"
section2.appendChild(img);
//Atividade 8
let ul = document.createElement("ul");

let numberList = ['Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'];

for (const key in numberList) {
    let li = document.createElement("li");
    li.innerText = numberList[key]
    ul.appendChild(li);
}
section3.appendChild(ul);

//Atividade 9
for (let index = 1; index <= 3; index += 1) {
    let h3 = document.createElement("h3");
    //Atividade 2 --> Alterações e Remoções
    h3.className = "description";
    main.appendChild(h3);
}

//Alterações e Remoções
//Atividade 1
h1.className = "title";
main.removeChild(section2);
document.getElementsByClassName("right-content")[0].style = "margin-right: auto";
section1.parentElement.style.backgroundColor = "green";
ul.removeChild(ul.lastElementChild);
ul.removeChild(ul.lastElementChild)