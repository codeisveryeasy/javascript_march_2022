console.log("Hello from external JS file!");
console.log("oiasduoiausd") 

//comment will not execute. This is single line comment
/*
 I am a multiline comment!
 I am a multi line comment!
*/

//Variables -> identifiers!
//declare a variable called name and assign it with value "Air Asia Academy"
var name1 = "Air Asia Academy"
var score = 88

console.log(name1)
console.log(score)

//you have received the name of academy from some API
var academyName = "Air Asia Academy, KL"
console.log("I am learning software engineering from ", academyName)
console.log("I am learning software engineering from "+ academyName)

var aName = "Air Asia Academy"
var city = "Kuala Lumpur"
console.log(aName + ", " +city)

var n1 = 88
var n2 = 12
console.log(n1+n2)

var amount = 88.88   //decimal or floats    
console.log(amount)

var check = true 
console.log(check)
check = false
console.log(check)

var topic  = "Data Science"
var message = "Learn " + topic + " from " + academyName
console.log(message)
alert()
var pRef = document.getElementById("paragraph")
console.log(pRef)
//pRef.innerText = message

var cityNamesRef = document.getElementById("citynames")
console.log(cityNamesRef)
console.log("This is real time!!!! Cool!!!!")