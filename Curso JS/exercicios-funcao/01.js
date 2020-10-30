//01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function operacoes(a, b) {
    return `Soma: ${a + b} | Subtração: ${a - b} | Multiplicação: ${a * b} | Divisão: ${a / b}` ;
}

console.log(operacoes(100, 5));