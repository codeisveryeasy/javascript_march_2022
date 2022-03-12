console.log("Functions")

/*
Functions -> Reusable code blocks
*/

//how do you write a function?

function welcome() {
    console.log("I am part of function definition")
    console.log("Welcome to Javascript!")
}


function welcomeAgain() {
    console.log("Welcome to Javascript Again!")
}
//how do I function called welcome

welcome()
welcomeAgain()

//Advantage -> Developer can re-use functions 
//again and again and again and again

welcomeAgain()
welcomeAgain()
welcomeAgain()

//define function called welcomeMessage(message) 
//where message is called function parameter

function welcomeMessage(personName) {
    console.log(personName + ", Welcome to world of JS programming!")
}

welcomeMessage("Prafful")
welcomeMessage("Hazry")

//define the function to add 2 numbers

var n1 = prompt("Input number n1: ")
var n2 = prompt("Input number n2: ")

var num1 = parseInt(n1)
var num2 = parseInt(n2)

function addition(number1, number2){
    console.log(number1 + number2)
}

addition(num1, num2)

function printNtimes(n, message){
    while(n > 0){
        console.log(message + " " + n)
        n = n - 1
    }
}

printNtimes(4, "Welcome to Air Asia Academy")
printNtimes(10, "Javascript is easy!")