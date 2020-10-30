const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // pega as chaves
console.log(Object.values(pessoa)); //pega os valores
console.log(Object.entries(pessoa)); //pega as chaves e valores em array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign es 2015

const destino = {a: 1};
const o1 = {b:2};
const o2 = {c: 3, a: 4};

const obj = Object.assign(destino, o1, o2);
console.log(destino);