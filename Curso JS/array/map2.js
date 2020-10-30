const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 3.45}'
]

const paraObjeto = json => JSON.parse(json); // transformando o JSON em Objeto
const apenasPreco = produto => produto.nome;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);

