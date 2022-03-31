console.log("Arrow functions")

// function welcome(){
//     console.log("Welcome to Air Asia Academy!!!!")
// }

//named functions
// const welcome = function () {
//     console.log("Welcome to Air Asia Academy!!!!")
// }

//re-write above function as awwaw function
const welcome = ()=>{
    console.log("Welcome to Air Asia Academy!!!!")
}
welcome()


// function welcomeMessage(message){
//     console.log("Message is: " + message)
// }

const welcomeMessage=(message)=>{
    console.log("Message is: " + message)
}
welcomeMessage("Hello")


// function getWelcomeMessage(message){
//     return "Welcome to " + message
// }

// const getWelcomeMessage=(message)=>{
//     return "Welcome to " + message
// }

//since there is only one statement in function scope, 
//below chenge is acceptable

const getWelcomeMessage=message=>"Welcome to " + message

let message = getWelcomeMessage("Mars")
console.log(message)

// const getWelcomeMessageOnDate=(message, messageDate)=> {
//     let day = messageDate.getDay()
//     "Welcome to " + message + " on " +day 
// }

const getWelcomeMessageOnDate=(message, messageDate)=> "Welcome to " + message + " on " + messageDate.getDay() 


let dateMessage = getWelcomeMessageOnDate("Moon", new Date())
console.log(dateMessage)

const addition = (n1, n2) => n1+n2

console.log(addition(8, 5))

const squared = n1=>n1*n1

console.log(squared(9))
