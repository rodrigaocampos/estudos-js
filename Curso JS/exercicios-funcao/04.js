// 04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function imprimeDivisaoEResto(divisor, dividendo) {
    return `
    Divisão: ${ dividendo / dividendo}
    Resto da divisão: ${dividendo % divisor}`;
}

console.log(imprimeDivisaoEResto(2,3));