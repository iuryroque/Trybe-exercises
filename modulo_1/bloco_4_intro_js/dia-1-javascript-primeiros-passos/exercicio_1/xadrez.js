let peca = "BiSpo";

switch (peca.toLowerCase(peca)) {
  case "peao":
      console.log("peao = uma casa reto");
    break;

  case "bispo":
    console.log("bispo = maximo diagonal");
    break;

  case "torre":
    console.log("torre = maximo reto");
  break;

  case "cavalo":
    console.log("cavalo = movimento em L");
  break;

  case "rainha":
    console.log("rainha = maximo diagonal ou reto");
  break;

  case "rei":
    console.log("rei = uma casa diagonal ou reto");
  break;

  default:
    break;
}