 //let titulo = document.querySelector('h1');
//titulo.innerHTML = '';

// let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = '';

let numeroAleatorio = 5;

let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Adivinhe o numero:');
    exibirTextoNaTela('p', 'Escolha um numero de 0 à 100');
}

exibirTextoNaTela('h1', 'Adivinhe o numero:');
exibirTextoNaTela('p', 'Escolha um numero de 0 à 100');

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!'
        let mensagemTentativas = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroAleatorio) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior ');

        }
        tentativas++;
        limparCampo();
    }
}
    


function gerarUmNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = 5;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}