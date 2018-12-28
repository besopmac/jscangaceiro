class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        console.log(typeof(this._inputData.value));
        
        let negociacao = new Negociacao(
            this._inputData.value,
            parseInt(this._inputQuantidade.value),
            parseFloat(rhis._inputValor)
        );

        console.log(negociacao);
    }

}