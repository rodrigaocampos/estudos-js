const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // desafio obter a mulher chinesa com melhor salario
    const getSexo = funcionario => funcionario.genero = 'F'
    const getPais = funcionario => funcionario.pais = 'China'

    const getMenorSalario = function(funcionario) { 
        let indice = 0      
        if(funcionario[indice].salario <= funcionario[indice + 1].salario) {
            return funcionario[indice]
        } 
    }
    const menorSalario = getMenorSalario(funcionarios.filter(getPais).filter(getSexo))
    console.log(menorSalario);


})
