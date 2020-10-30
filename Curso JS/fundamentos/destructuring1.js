//novo recurso do es6

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lagradouro: 'rua abc',
        numero: 1000
    }
}

console.log(pessoa);

const {nome, idade} = pessoa; // peguei o nome e idade do objeto pessoa

console.log(nome, idade);

const { nome: n, idade: i} = pessoa; // criei novas variaveis com os valores dos atributos de pessoa

console.log(n, i);