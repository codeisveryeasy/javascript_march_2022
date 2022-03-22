console.log("Working with events in JS file")

//var btnref = document.getElementById("btn")
var btnref = document.querySelector("#btn")
console.log(btnref)

var valueref = document.querySelector("#value")
console.log(valueref)

//register the event
btnref.addEventListener("click", callMe)

//list of events you can register:
//https://www.w3schools.com/jsref/dom_obj_event.asp

var counter = 8 
function callMe(){
    console.log("Button clicked: " + counter)
    //valueref.innerText = counter
    var htmlCode = "<span style='color:brown;'>" + counter + "</span>"
    valueref.innerHTML = htmlCode
    counter++
}

// function helloMe(){
//     console.log("Hello clicked: " + counter)
//     counter++
// }


// (function (){
//     console.log("I am every where!")
// })()