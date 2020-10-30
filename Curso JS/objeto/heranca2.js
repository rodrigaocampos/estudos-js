// Cadeia de prototipos (prototype chain)

const avo = {attr1: 'A'};
const pai = {__proto__: avo, attr2: 'B'};
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing   
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro); // Aqui eu estabeleco uma relação de heranca entre a ferrari e o carro
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);

volvo.acelerarMais(100);
console.log(volvo.status());