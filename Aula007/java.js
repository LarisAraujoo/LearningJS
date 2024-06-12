let SecretNumber = 6

let palpite = Number(prompt('Escolha um numero de 0 à 10'))

if (palpite == SecretNumber) {
    console.log('Parabéns você acertou!')

} else if (palpite > SecretNumber) {
    console.log('Seu palpite é maior que o numero secreto. Tente novamente!')

}  else {
    console.log('Seu palpite é menor que o numero secrete. Tente novamente!')
}