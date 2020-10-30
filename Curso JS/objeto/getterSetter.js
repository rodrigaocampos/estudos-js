const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor++ },
    set valor(valor) {return this._valor = valor}
}