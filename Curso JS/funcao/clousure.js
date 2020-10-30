// closure é o escopo criado quando a funcao é declarada
// esse escopo permite a funcao acessar e manipular variáveis externas a funcao

const x = 'Global';
function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());