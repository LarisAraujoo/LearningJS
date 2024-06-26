 //let titulo = document.querySelector('h1');
//titulo.innerHTML = '';

// let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = '';

let listaDeNumeros = [];
let numeroLimite = 100;
let numeroAleatorio = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1});
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
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeros.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)) {
        
        return gerarUmNumeroAleatorio();

    } else {
        listaDeNumeros.push(numeroEscolhido);
        
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}