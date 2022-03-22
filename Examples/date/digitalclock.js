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

    var hourRef =  document.getElementById("hour")
    hourRef.innerHTML = "<span style='color:red;'>" + hour + "</span>"

    var minRef =  document.getElementById("min")
    minRef.innerHTML =  "<span style='color:green;'>" + min + "</span>"

    var secRef =  document.getElementById("sec")
    secRef.innerHTML =  "<span style='color:blue;'>" + min + "</span>"

    var msRef =  document.getElementById("ms")
    msRef.innerHTML =  "<span style='color:pink;'>" + ms + "</span>"
}