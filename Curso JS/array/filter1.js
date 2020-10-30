const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 1222.49, fragil: false },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return p
}))

console.log('//////////////////////////////');

const eCaro = pro => pro.preco > 500;
const eFragil= pro => pro.fragil == true;


console.log(produtos.filter(eCaro).filter(eFragil));