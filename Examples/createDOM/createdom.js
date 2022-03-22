console.log("Create DOM")


var olref = document.querySelector("#list")
console.log(olref)

var createRef = document.querySelector("#createli")

createRef.addEventListener("click", function(){
    console.log("button clicked")
    //create new li in buffer in DOM
    var newli = document.createElement("li")
    //add innerText to li
    newli.innerText = "Five"
    //log to the console and see what is created
    //console.log(newli)
    //add the attribute called class with value = item
    newli.setAttribute("class", "item")
    //log to the console and see what is created
    console.log(newli)

    //add the newli to ol
    olref.appendChild(newli)
})
