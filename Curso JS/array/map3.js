Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this ));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 3.45}'
]

const paraObjeto = json => JSON.parse(json); // transformando o JSON em Objeto
const apenasPreco = produto => produto.nome;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado);

