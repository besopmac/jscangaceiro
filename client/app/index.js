// campos do form
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);

// buscando tbody
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();
   
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');

        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    // limpando os campos
    campos[0].value = ''; 
    campos[1].value = ''; 
    campos[2].value = '';
    
    // adicionando foco no primeiro campo
    campos[0].focus();
});