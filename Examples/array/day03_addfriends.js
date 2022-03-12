console.log("Add friends in an array!")

var friends = []
console.log(friends)

friends.push("omi")
console.log(friends)


friends.push("kia")
console.log(friends)


while(true){
    var newFriend = prompt("Add new friend name: ")
    console.log(newFriend) 
    if(newFriend == "stop"){
        break
    }
    friends.push(newFriend)
    console.log(friends)
   
}

console.log("Added all friends!!!!")
console.log(friends)
console.log("Sort all friends in ascending order")
friends.sort()
console.log(friends)

console.log("Sort all friends in descending/reverse order")
friends.reverse()
console.log(friends)



