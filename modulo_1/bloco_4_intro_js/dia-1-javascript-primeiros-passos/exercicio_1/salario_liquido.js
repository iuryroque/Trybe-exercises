let salario  = 3000;
let sal_inss, sal_ir, imposto_renda, inss;

// Calculo de INSS
if (salario < 1556.95) {
    inss = (salario / 100) * 8;
    }else if (salario >= 1556.95 && salario < 2594.93) {
        inss = (salario / 100) * 9;
        }else if (salario >= 2594.93 && salario < 5189.83) {
            inss = (salario / 100) * 11;
            }else{
                inss = 570.88;
            } 
// Salario subtraido do INSS
sal_inss = salario - inss;

// Calculo Imposto de Renda
if (sal_inss < 1903.99) {
    imposto_renda = 0;
    }else if (sal_inss >= 1903.99 && sal_inss < 2826.26) {
        imposto_renda = (sal_inss / 100) * 7.5;
        imposto_renda -= 142.80
        }else if (sal_inss >= 2826.66 && sal_inss < 3751.06) {
            imposto_renda = (sal_inss / 100) * 15;
            imposto_renda -= 354.80;
            }else if (sal_inss >= 3751.06 && sal_inss < 4664.69) {
                imposto_renda = (sal_inss / 100) * 22.5;
                imposto_renda -= 636.13;
                }else{
                    imposto_renda = (sal_inss / 100) * 27.5;
                    imposto_renda -= 869.36
                }

// Salario subtraido do Imposto de Renda
sal_ir = sal_inss - imposto_renda;
console.log(sal_ir);
// 