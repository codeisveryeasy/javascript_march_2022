console.log("Countdown")

/*
setTimeOut -> it will execute the function 
only after n milliseconds

setInterval -> it will execute the function 
every n milliseconds

*/

function welcome(){
    console.log("welcome to setTimeOut")
    var timeOutRef = document.getElementById("timeout")
    timeOutRef.innerText = "setTimeOut works well!"
}

setTimeout(welcome, 10000)

var intervalKey = setInterval(countdown, 1000)

var counter = 1
function countdown(){
    console.log(counter)
    counter = counter + 1 
    var intervalRef = document.getElementById("interval")
    intervalRef.innerText = counter
    if (counter == 20) {
        clearInterval(intervalKey)
    }
}

