const pai = {nome: 'Pedro', corDoCabelo: 'preto'};

const filha = Object.create(pai);
filha.nome = 'Ana';
console.log(filha.corDoCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'bia', writable: false, enumerable: true} // valor, alteravel? enumerável? 
});

console.log(filha2.nome);
filha2.nome = 'carla';
console.log(`${filha2.nome} tem cabelo da cor ${filha2.corDoCabelo}`);

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por heranca: ${key}`)
}