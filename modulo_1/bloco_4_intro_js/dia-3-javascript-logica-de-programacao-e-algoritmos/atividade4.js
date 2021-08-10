let linhas = 10;

for (let index = 1; index <= linhas; ++index) {
    console.log(" ".repeat(linhas - index) + "*".repeat((index*2)-1) + " ".repeat(linhas - index)); 
}