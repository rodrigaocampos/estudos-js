// Funcao em JS é First-Class Object
// high order function

// criar de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function () {}

// armazenar em um array

const array = [function (a, b) {return a + b}, fun1, fun2]

// Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a+b+c);
    }
}


soma(2,3)(4)