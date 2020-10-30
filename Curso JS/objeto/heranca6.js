function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('ate breve', 456);
console.log(aula1, aula2);

// simulando new
function novo(f, ...paramns) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, paramns);
    return obj;
}

const aula3 = novo(Aula, 'bem vindo', 123);
const aula4 = novo(Aula, 'ate breve', 456);
console.log(aula3, aula4);