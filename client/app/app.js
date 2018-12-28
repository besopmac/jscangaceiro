// criando instância do controller
let controller = new NegociacaoController();

// associando o submit do formulário à chamada do método adiciona
document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));