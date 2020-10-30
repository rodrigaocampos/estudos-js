const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[3])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // push adiciona no array
console.log(valores)

valores.pop() //remove o ultimo item do array
console.log(valores)

delete valores[0] //deleta o item do indice passado
console.log(valores)

console.log(typeof valores)