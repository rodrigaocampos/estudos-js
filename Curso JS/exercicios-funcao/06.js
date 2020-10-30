function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao ) {
    // j = c.i.t
    let juros;
    juros = capitalInicial * taxaDeJuros * tempoDeAplicacao;
    return `Aplicando: R$${capitalInicial} irá render: R$${juros} totalizando um montante de R$${capitalInicial + juros} em ${tempoDeAplicacao} meses`;
}

console.log(jurosSimples(100, 0.10, 30));

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    // m = c (1+ i) pow T
    let montante = capitalInicial * (Math.pow((1 + taxaDeJuros), tempoDeAplicacao));
    return `Aplicando: R$${capitalInicial} irá render: R$${montante - capitalInicial} totalizando: R$${montante} em ${tempoDeAplicacao}`;
}

console.log(jurosCompostos(100, 0.10, 30));