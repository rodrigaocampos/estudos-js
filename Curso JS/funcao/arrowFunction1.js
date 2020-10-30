let dobro = function _(a) {
    return a * 2;
}

// função arrow
dobro  = (a) => {
    return a * 2;
}

// função arrow reduzida com return inplícito
dobro = a => 2 * a ;

console.log(dobro(8));




// função sem parametros normal
let ola = function () {
    return 'olá';
}

// funcao sem parametros tipo Arrow
ola = () => 'olá';
ola = _ => 'olá'; //possui parametro

console.log(ola());