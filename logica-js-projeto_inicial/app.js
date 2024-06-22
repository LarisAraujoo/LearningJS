alert('Welcome to the first game Secret Number!')
let maximumNumber = 500;
let secretNumber = parseInt(Math.random() * maximumNumber + 1)
let number 
let attempts = 1

while (number != secretNumber){
    number = Number(prompt(`Enter a number from 0 to ${maximumNumber}:`))

    if (number == secretNumber){
        break;
    } else {
        if (number > secretNumber){
            alert(`The number is less than ${number}`)
        } else {
            alert(`The number is greater than ${number}`)
        }
        attempts++
    }
}
if (attempts > 1) {
    alert(`The number is ${secretNumber}, you win with ${attempts} attempts!`)
    } else {
        alert(`The number is ${secretNumber}, you win with ${attempts} attempt!`)
    }