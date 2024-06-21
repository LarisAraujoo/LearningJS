alert('Welcome to the first game Secret Number!')

let number = Number(prompt('Digite um numero de 1 à 10:'))


let secretNumber = 5

console.log(secretNumber)

if (number == secretNumber) {
    alert(`The number is ${secretNumber}. You win!`)
} else {
    alert('You lose, try again!')
}