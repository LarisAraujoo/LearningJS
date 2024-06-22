alert('Welcome to the first game Secret Number!')
let secretNumber = 6
let number 
let attempts = 1

while (number != secretNumber){
    number = Number(prompt('Enter a number from 0 to 10:'))

    if (number == secretNumber){
        alert(`The number is ${secretNumber}, you win with ${attempts} attempts!`)
    } else {
        if (number > secretNumber){
            alert(`The number is less than ${number}`)
        } else {
            alert(`The number is greater than ${number}`)
        }
        attempts++
    }
}