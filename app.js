let amigos = []; 

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo').value.trim();
    
    if (nomeInput === '') {
        alert("Por favor, insira um nome.");
    } else if (amigos.includes(nomeInput)) {
        alert("Este nome já está na lista!");
    } else {
        amigos.push(nomeInput);
        exibirAmigos();
    }
    
    document.getElementById('amigo').value = '';
}

let botaoAdicionar = document.getElementsByClassName('button-add')[0];

function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(novoAmigo);
    }
    let tamanhoDaLista = amigos.length; 
    console.log('O tamanho da lista de amigos é:', tamanhoDaLista);
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoElemento = document.getElementById('resultado'); 
    resultadoElemento.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

let botaoSortear = document.getElementsByClassName('button-draw')[0];
botaoSortear.addEventListener('click', sortearAmigo);