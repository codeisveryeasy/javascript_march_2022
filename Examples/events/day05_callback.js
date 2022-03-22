console.log("Working with events in JS file")

//var btnref = document.getElementById("btn")
var btnref = document.querySelector("#btn")
console.log(btnref)

var valueref = document.querySelector("#value")
console.log(valueref)

var counter = 8
//register the event
btnref.addEventListener("click", function(){
    console.log("Button clicked: " + counter)
    //valueref.innerText = counter
    var htmlCode = "<span style='color:red;'>" + counter + "</span>"
    valueref.innerHTML = htmlCode
    counter++
})
/*
call back function
ghost function
anynomous function
noname function
*/

// function callMe() {
//     console.log("Button clicked: " + counter)
//     //valueref.innerText = counter
//     var htmlCode = "<span style='color:red;'>" + counter + "</span>"
//     valueref.innerHTML = htmlCode
//     counter++
// }

// function helloMe(){
//     console.log("Hello clicked: " + counter)
//     counter++
// }
