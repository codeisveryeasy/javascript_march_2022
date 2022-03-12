console.log("DOM")

var olref1 = document.getElementById("list")
console.log(olref1)

var olref2 = document.querySelector("#list")
console.log(olref2)

var itemref = document.querySelectorAll(".item")
console.log(itemref)
console.log(itemref.length)

var counter = 0
while(counter < itemref.length){
    console.log(itemref[counter])
    console.log(itemref[counter].innerHTML)
    counter = counter + 1
}