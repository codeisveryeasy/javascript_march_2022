console.log("Keyboard events")

var todoref = document.getElementById("todo")
console.log(todoref)

var h1ref = document.getElementById("secret")
console.log(h1ref)
console.log(h1ref.innerText)

todoref.addEventListener("click", function(){
    console.log("Input field clicked!")
})

todoref.addEventListener("focus", function(){
    console.log("Input field is in focus")
})

todoref.addEventListener("blur", function(){
    console.log("Input field lost focus")
})

todoref.addEventListener("keyup", function(event){
    console.log("Some key is released!!!!")
    console.log(event)
    console.log(event.key)
    //event.target points to the owner of the event
    console.log(event.target)
    //value contained in owner
    console.log(event.target.value)
    h1ref.innerText = event.target.value
})