// coleção dinâmica de pares chave valor
const produto = new Object;
produto.nome = 'cadeira';
produto['marca do produto'] = 'Generica'; //fuja deste padrão
produto.preco = 220;

console.log(produto);
delete produto.preco;

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }

    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularValorDoSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000;

console.log(carro);