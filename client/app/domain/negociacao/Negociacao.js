class Negociacao {

    // definindo as propriedades da classe
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // congela a instância
    }

    /*
     * getter: uma propriedade de leitura que
     * impede a mudança de valores diretamente
     * 
     */
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}