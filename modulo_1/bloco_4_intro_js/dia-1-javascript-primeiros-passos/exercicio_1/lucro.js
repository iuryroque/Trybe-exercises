let custo_produto = 10;
let valor_venda = 20;

if (custo_produto >= 0 && valor_venda > 0){
    let imposto = 1.2;
    let produtos_vendidos = 1000;
    let custo_total = imposto * custo_produto;
    let lucro = valor_venda - custo_total;
    let lucro_total = produtos_vendidos * lucro;
    console.log("Lucro da empresa: " + lucro_total);

}else{
    console.log("Erro");
}
