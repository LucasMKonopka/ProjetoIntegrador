// Defina uma função para manipular o envio do formulário
function cadastrarAnimal() {
    // Obtenha os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var especie = document.getElementById('especie').value;
    var idade = document.getElementById('idade').value;
    var raça = document.getElementById('raça').value;
    var porte = document.getElementById('porte').value;
    var datanasc = document.getElementById('datanasc').value;
    var sexo = document.getElementById('sexo').value;

    // Valide os campos (adapte conforme necessário)
    if (nome === '' || especie === '' || idade === '' || raça == '' || porte == '' || datanasc == '' || sexo == '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Crie um objeto animal com os dados
    var animal = {
        nome: nome,
        especie: especie,
        idade: idade,
        raça : raça,
        porte : porte,
        datanasc : datanasc,
        sexo : sexo
        
    };

    // Aqui você pode enviar o objeto animal para o backend ou fazer o que for necessário
    // Por exemplo, você pode usar AJAX para enviar os dados para o servidor.

    // Limpe o formulário
    document.getElementById('nome').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('raça').value = '';
    document.getElementById('porte').value = '';
    document.getElementById('datanasc').value = '';
    document.getElementById('sexo').value = '';
}

// Exemplo de uso de um botão no HTML para acionar a função cadastrarAnimal
// <button onclick="cadastrarAnimal()">Cadastrar Animal</button>

function salvaranimal(){
    window.location.href = "inicial.html";
}
