console.log("Create Word")

var kref = document.getElementById("a1")
var oref = document.getElementById("a2")
var nref = document.getElementById("a3")
var eref = document.getElementById("a4")
var aref = document.getElementById("a5")
var rref = document.getElementById("a6")
var mref = document.getElementById("a7")
var dref = document.getElementById("a8")

var outpuref = document.getElementById("output")

var word = ""

function captureK(){
    console.log(kref.innerText)
    word = word  + kref.innerText
    console.log(word)
    outpuref.innerText = word
}


function captureO(){
    console.log(oref.innerText)
    word = word  + oref.innerText
    console.log(word)
    outpuref.innerText = word
}


function captureN(){
    console.log(nref.innerText)
    word = word  + nref.innerText
    console.log(word)
    outpuref.innerText = word
}

function captureE(){
    console.log(eref.innerText)
    word = word  + eref.innerText
    console.log(word)
    outpuref.innerText = word
}

function captureA(){
    console.log(aref.innerText)
    word = word  + aref.innerText
    console.log(word)
    outpuref.innerText = word
}

function captureR(){
    console.log(rref.innerText)
    word = word  + rref.innerText
    console.log(word)
    outpuref.innerText = word
}

function captureM(){
    console.log(mref.innerText)
    word = word  + mref.innerText
    console.log(word)
    outpuref.innerText = word
}

function captureD(){
    console.log(dref.innerText)
    word = word  + dref.innerText
    console.log(word)
    outpuref.innerText = word
}
