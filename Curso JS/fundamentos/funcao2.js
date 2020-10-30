// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5,6))

// retorno implícito
const sub = (a, b) => a-b // após a setinha é o retorno 
console.log(sub( 10, 4))