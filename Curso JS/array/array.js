console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');

console.log(aprovados);

aprovados = ['bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[3]);

aprovados[3] = 'rodrigo';
aprovados.push('jose');

console.log(aprovados);

aprovados[9] = 'ingrid';
console.log(aprovados);

aprovados.sort();

console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);

aprovados = ['bia', 'carlos', 'ana'];
aprovados.splice(1,1); // exclui 1 elemento apartir do indice do carlos
console.log(aprovados);