 //let titulo = document.querySelector('h1');
//titulo.innerHTML = '';

// let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = '';

let numeroAleatorio = gerarUmNumeroAleatorio();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Adivinhe o numero:');
exibirTextoNaTela('p', 'Escolha um numero de 0 à 100')

function verificarChute() {
    console.log(numeroAleatorio)
}

function gerarUmNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}