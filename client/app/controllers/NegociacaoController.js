class NegociacaoController {

    adiciona(event) {
        event.preventDefault();
        
        // realizando o bind, $ mantém document como seu contexto this
        let $ = document.querySelector.bind(document);

        // buscando elementos
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value)); // arredondando para inteiros
        console.log(parseFloat(inputValor.value)); // arredondando para ponto flutuante
    }

}