class Negociacao {

    /*
     *  Toda propriedade de uma classe prefixada com um underline
     *  NÃO deve ser acessada fora dos métodos da própria classe.
     */

    constructor(_data, _quantidade, _valor) {
        /*
         * Definindo um construtor verbosamente
         * this._data = new Date(data.getTime());
         * this._quantidade = quantidade;
         * this._valor = valor;
         */ 

        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime()),

        Object.freeze(this);
    }

    /*
     * Para não quebrar a convenção citada acima são
     * criados os métodos de leitura, a.k.a GETTERS.
     * 
     * Apesar de criados como métodos, eles devem
     * ser acessados como propriedades.
     */
    get data() {
        // return this._data;
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}