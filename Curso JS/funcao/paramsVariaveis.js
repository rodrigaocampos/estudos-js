function soma() {
    let soma = 0;
    for (i in arguments) {
        soma  +=  arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(2,2));
console.log(soma(2,2,2,2,2,2));