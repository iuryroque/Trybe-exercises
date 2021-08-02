let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//1ª Atividade
  console.log("Bem vinda " + info.personagem);

//2ª Atividade
info ["recorrente"] = "Sim"
console.log(info);

//3ª Atividade
for (let key in info) {
  console.log(key);
}

console.log(" ");

//4ª Atividade
for (let key in info) {
  console.log(info [key]);
}

console.log(" "); 

//5ª Atividade
let info2 = {
personagem: 'Tio Patinhas',
origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
nota: 'O último MacPatinhas',
recorrente: 'sim',
};


for (let key in info) {
if (key === "recorrente" && info[key].toLowerCase() === "sim" && info2[key].toLowerCase() === "sim") {
  console.log("Ambos recorrentes");
} else {
  console.log(info [key] + " e "+ info2 [key]);
}

}