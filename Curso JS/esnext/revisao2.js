// arrow functions
const soma = (a,b) => a + b
console.log(soma(2,3))

//arrow functions this
const lexico1 = () => console.log(this === exports)

// parametro default
function log(texto = 'node') {
    console.log(texto)
}
log()