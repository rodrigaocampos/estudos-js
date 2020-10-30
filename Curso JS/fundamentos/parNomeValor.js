// par nome valor
const saudacao = 'opa';  // contexto léxico

function exec() {
    const saudacao = 'falaaa';
    return saudacao;
}

// Objetos são grupos aninhados de pares chave/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lagradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
