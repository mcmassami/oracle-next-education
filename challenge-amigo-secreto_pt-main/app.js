let amigos = [];  // Array inicializado para armazenar os nomes

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();  // Captura o valor do input e remove espaços em branco

    // Verifica se o nome é válido
    if (!nome) {
        alert('Digite um nome válido!');
        return;
    }

    amigos.push(nome);  // Adiciona o nome ao array
    input.value = '';  // Limpa o input
    atualizarLista();  // Atualiza a lista de amigos
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpa a lista

    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;  // Adiciona o nome à lista
    });
}