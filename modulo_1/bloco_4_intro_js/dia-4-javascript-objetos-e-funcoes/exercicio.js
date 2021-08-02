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