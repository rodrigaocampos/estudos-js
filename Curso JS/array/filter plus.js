const notas = [7.1, 8.3, 6.3, 9.1, 4.3];

const aprovado  = n => n >= 7 // retorna a nota maior ou iguala  7

const resultado = notas.filter(aprovado);

console.log(resultado);