console.log("Events in Javascript")

function welcome(){
    var message = "Welcome to event handling in JS!"
    console.log(message)
    var pRef = document.getElementById("para1")
    console.log(pRef)
    pRef.innerText = message
}

var counter = 0 

//any event in in JS always has an event object associate with the same



function capturePosition(event){
    console.log("Mouse is moving " + counter)
    counter = counter + 1
    console.log(event)
    console.log(event.x)
    console.log(event.y)

    var  xref = document.getElementById("xposition")
    var yref = document.getElementById("yposition")

    xref.innerText = event.x
    yref.innerText = event.y

}


