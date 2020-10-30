const numeros = [1,2,3,4,5,6,7,8,9,10]

function media(acumulador, numero) {
    
    
    return {
        total: acumulador.total + 1,
        quantidade: acumulador.quantidade,
        media: acumulador.total / acumulador.quantidade

    }
}

const valorInicial = {total: 0, quantidade: 0, media: 0}

const resultado = numeros.reduce(media, valorInicial) // const resultado = numeros.reduce(somar, 1000) nessa parte o valor 1000 foi adicionado como valor inicial

console.log(resultado);