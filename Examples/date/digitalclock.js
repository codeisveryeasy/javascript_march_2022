console.log("Digital Clock")


var intervalKey = setInterval(displayClock, 100)



function displayClock(){
    var currentTime = new Date()
    console.log(currentTime)
    var hour = currentTime.getHours()
    var min = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    var ms = currentTime.getMilliseconds()
    console.log(hour + ":" + min + ":" + sec + ":" + ms)
    var displayTime = hour + ":" + min + ":" + sec + ":" + ms

    var clockRef = document.getElementById("clock")
    clockRef.innerText = displayTime
}