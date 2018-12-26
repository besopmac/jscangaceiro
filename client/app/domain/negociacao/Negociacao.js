class Negociacao {

    /*
     *  Toda propriedade de uma classe prefixada com um underline
     *  NÃO deve ser acessada fora dos métodos da própria classe.
     */

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    obtemVolume() {
        return this._quantidade * this._valor;
    }

    /*
     * Para não quebrar a convenção citada acima
     * são criados os métodos get, a.k.a GETTERS.
     */
    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}