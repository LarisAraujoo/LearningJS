let answer = prompt('Está chovendo hoje? (sim/não)')

answer = answer.toLowerCase()

if (answer === 'sim') {
    console.log('Por favor, use guarda-chuva!')

} else if (answer === 'não') {
    console.log('Pode ficar tranquilo!')

} else {
    console.log('Resposta invalida, por favor, tente novamente!')
}