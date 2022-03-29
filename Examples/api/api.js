console.log("API")

var callapiref = document.querySelector("#callapi")
callapiref.addEventListener("click", getData)
var users = []
var usersref = document.querySelector("#users")
console.log(usersref)

async function getData(){
    
    let response  = await fetch("https://jsonplaceholder.typicode.com/users")
    //let response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    //let response = await fetch("http://localhost:3000/friends")
    console.log(response)
    console.log(response.status)
    if(response.status == 200){
        let data = await response.json()
        users = data
        console.log(users)
        console.log(users[0])
        console.log(users[1])
        console.log(users[2])
        console.log(users[3])
        console.log(users[4])
        console.log("Length of data in response: " + data.length)

        //display users in document
        for (let index = 0; index < users.length; index++) {
            var newli = document.createElement("li")
            newli.innerText = users[index].name + " @ id: " + users[index].id
            //newli.innerText = users[index].title + " @ id: " + users[index].id
            usersref.appendChild(newli)
            
        }
       

    }

}







//getData()