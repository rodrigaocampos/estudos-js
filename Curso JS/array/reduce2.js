const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true},
    { nome: 'pedro', nota: 9.8, bolsista: true},
    { nome: 'ana', nota: 8.7, bolsista: true}

]

const resultado = alunos.map( a => a.bolsista).reduce(function (acumulador, atual) {
    return acumulador + atual;
})

console.log(resultado);