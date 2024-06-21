alert('Welcome to the first game Secret Number!')

let number = Number(prompt('Digite um numero de 1 à 10:'))

let secretNumber = 5

if (number == secretNumber) {
    console.log('You win!')
} else {
    console.log('You lose, try again!')
}