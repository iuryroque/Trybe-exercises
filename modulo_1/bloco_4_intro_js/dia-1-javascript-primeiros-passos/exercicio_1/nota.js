let nota = -1;

if (nota >= 0 && nota < 50){
    console.log("A nota é " + nota + " = F");
}else if (nota >= 50 && nota < 60){
    console.log("A nota é " + nota + " = E");
}else if (nota >= 60 && nota < 70){
    console.log("A nota é " + nota + " = D");
}else if (nota >= 70 && nota < 80){
    console.log("A nota é " + nota + " = C");
}else if (nota >= 80 && nota < 90){
    console.log("A nota é " + nota + " = B");
}else if (nota >= 90 && nota <= 100){
    console.log("A nota é " + nota + " = A");
}else {
    console.log("Erro");
}