var listaAnimais = [];

// Função para cadastrar um novo animal
function salvarAnimal() {
    // Obtenha os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var especie = document.getElementById('especie').value;
    var idade = document.getElementById('idade').value;
    var raca = document.getElementById('raça').value;
    var porte = document.getElementById('porte').value;
    var datanasc = document.getElementById('datanasc').value;
    var sexo = document.getElementById('sexo').value;

    // Valide os campos (adapte conforme necessário)
    if (nome === '' || especie === '' || idade === '' || raca === '' || porte === '' || datanasc === '' || sexo === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Crie um objeto animal com os dados
    var animal = {
        nome: nome,
        especie: especie,
        idade: idade,
        raca: raca,
        porte: porte,
        datanasc: datanasc,
        sexo: sexo
    };

    console.log('Animal cadastrado: ', animal);
    listaAnimais.push(animal);

    limparFormulario();

    window.location.href = "inicial.html";
}

// Função para pesquisar animais
function pesquisarAnimal() {
    var termoPesquisa = document.getElementById('pesquisaAnimal').value.toLowerCase();

    // Filtra a lista de animais com base no termo de pesquisa
    var animaisFiltrados = listaAnimais.filter(function(animal) {
        return animal.nome.toLowerCase().includes(termoPesquisa);
    });

    // Exiba a lista de animais filtrados no console
    console.log(animaisFiltrados);

    // Verifique se algum animal foi encontrado
    if (animaisFiltrados.length > 0) {
        // Animal encontrado, você pode adicionar lógica adicional aqui
        console.log('Animal encontrado:', animaisFiltrados[0]);
    } else {
        // Nenhum animal encontrado, exiba uma mensagem
        console.log('Animal não encontrado. Crie um novo cadastro ou verifique o nome inserido.');
        // Ou exiba uma mensagem na página para o usuário
        document.getElementById('mensagemCadastro').innerText = 'Animal não encontrado. Crie um novo cadastro ou verifique o nome inserido.';
    }
}


// Função para limpar o formulário após cadastrar um animal
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('raça').value = '';
    document.getElementById('porte').value = '';
    document.getElementById('datanasc').value = '';
    document.getElementById('sexo').value = '';
}

// Função para pesquisar animais
function pesquisarAnimal() {
    var termoPesquisa = document.getElementById('pesquisaAnimal').value.toLowerCase();

    // Filtra a lista de animais com base no termo de pesquisa
    var animaisFiltrados = listaAnimais.filter(function(animal) {
        return animal.nome.toLowerCase().includes(termoPesquisa);
    });

    // Exiba a lista de animais filtrados no console
    console.log(animaisFiltrados);
}


    

function novaficha(){
    window.location.href = "novaficha.html";
}
function botaoHome() {
    window.location.href = "inicial.html";
}
function cadastraranimal(){
    window.location.href = "index.html";
}

function cancelarCadastro() {
    var confirmacao = confirm("Tem certeza que deseja cancelar o cadastro? Ao cancelar esse cadastro, todas as pendências relacionadas a ela serão excluídas e não será possível desfazer o processo.");

    if (confirmacao) {
        window.location.href = "inicial.html";
    } 
}
function salvarFicha(){
    window.location.href = "inicial.html";
}
function cancelarFicha() {
    var confirmacao = confirm("Tem certeza que deseja cancelar a criação da nova ficha? Ao excluir a ficha, todas as pendências relacionadas a ela serão excluídas e não será possível desfazer o processo.");

    if (confirmacao) {
        window.location.href = "inicial.html";
    } 
}
function buscarficha(){
    window.location.href = "buscarficha.html";
}