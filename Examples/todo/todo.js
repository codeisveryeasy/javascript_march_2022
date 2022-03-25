console.log("My Assistant")

let newtask = ""

//hold reference to elements in html
//get reference to input field
let newtaskref = document.querySelector("#newtask")
//get reference to add button
let addref = document.querySelector("#addnewtask")
//get reference to ol
let newtasklistref = document.querySelector("#newtasklist")
//console.log(newtaskref)
//register event listener with input field
newtaskref.addEventListener("keyup", captureNewTask)
//register the event listener with add button
addref.addEventListener("click", addNewTaskInList)


function captureNewTask(event) {
    //console.log("keyup event fired for input field")
    //console.log(event)
    //console.log(event.target.value)

    newtask = event.target.value
    console.log(newtask)
    //add task as li item if enter is hit while adding new task
    if (event.code === "Enter") {
        console.log("enter hit")
        addNewTaskInList()
    }
}

function addNewTaskInList() {
    if (newtask.length < 4) {
        alert("Add some text for new task. Minimum length of alphabets in new task is 4. Current length is: " + newtask.length)
        //get the input focus back to input field
        newtaskref.focus()
    } else {
        let linew = createNewLi()
        //console.log(linew)
        newtasklistref.appendChild(linew)
        //once added, make input field blank again
        newtaskref.value = ""
        newtaskref.focus()
    }


}

function createNewLi() {
    //create new li
    let newli = document.createElement("li")
    newli.innerText = newtask + " "
    //create new button
    let newbtn = document.createElement("button")
    newbtn.innerText = "Done"
    newbtn.setAttribute("onclick", "taskDone()")
    console.log(newbtn)
    //console.log(newli)
    //append newbtn to newli as child
    newli.appendChild(newbtn)
    //console.log(newli)

    return newli
}

function taskDone(){
    console.log("Given task is done!!!!");
}