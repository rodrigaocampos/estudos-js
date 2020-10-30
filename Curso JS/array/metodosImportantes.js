const pilotos = ['vetel', 'alonso', 'raikonem', 'massa'];
pilotos.pop(); // remove o massa
console.log(pilotos);

pilotos.push('vertappen');
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('rodrigao'); // add no inicio
console.log(pilotos);

// splice pode add ou remover


// adicionar
pilotos.splice(2, 0, 'kenedy', 'mirim'); // inserem os elementos a partir do 2
console.log(pilotos);

//remover
pilotos.splice(3, 1); // remove o indice 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array que vai do indice 1 até o indice anterior ao 4
console.log(algunsPilotos2);

