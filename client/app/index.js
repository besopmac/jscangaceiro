/*
 * armazenando os campos do formulário
 * 
 */
let campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

/*
 * armazenando tbody a uma variável
 * ele receberá a tr que será construída
 * 
 */
let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    // cancelando submissão do formulário
    event.preventDefault();
    
    // cria um elemento <tr>
    let tr = document.createElement('tr');

    // cria um elemento <td> para cada item da array campos 
    campos.forEach(function(campo) {
        let td = document.createElement('td');

        // atribui um valor de campo à <td>
        td.textContent = campo.value;

        // adiciona a <td> à <tr>
        tr.appendChild(td);
    });

    // criando <td> que armazena o volume da transação
    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    // adicionando ao <tbody> a tabela criada
    console.log(tr);
    tbody.appendChild(tr);

    // limpeza dos campos do formulário
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // define foco no campo data
    campos[0].focus();
});