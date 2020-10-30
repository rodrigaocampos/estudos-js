// Object.preventExtensions     não add atributos

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag:'promocao'
})

console.log('Extensível: ' , Object.isExtensible(produto));

produto.nome = 'borracha';
produto.descricao = 'borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal não exclui nem add, porém pode alterar

const pessoa = {nome: 'Juliana', idade: 35};
console.log(pessoa);
Object.seal(pessoa);
console.log('selado: ' , Object.isSealed(pessoa));
pessoa.sobrenome = 'silva';
delete pessoa.nome;
pessoa.idade = 29.
console.log(pessoa);

