console.log("Array in JS")

//using array, you can store multiple values
// in same variable, , 

var scores = new Array(88, 71, 62, 53, 44, 31, 22)
console.log(scores)
console.log(typeof scores)

//within the array, the position of the
//first element/value is always 0

console.log(scores[0])
console.log(scores[4])
console.log("Length of scores array: " + scores.length)
console.log("Get last element of array: " + scores[scores.length - 1])

var friends = new Array("Onk", "Mia", "Kia", "Che")
console.log(friends)
console.log("Length of friends array: " + friends.length)
console.log(friends[2])

//below does not exist -> undefined
//console.log(friends[5])

var myScores =  [5, 4, 2, 4, 3]
var myFriends = [ "gone", "mone", "tone", "lone"]
console.log(myScores)
console.log(myFriends)
myFriends[2] = "swim"
console.log(myFriends);

function calculateSumOfAllNumbersInArray(numbers){
    var sum = 0
    var counter = 0
    while(counter < numbers.length){
        sum = numbers[counter] + sum
        counter = counter + 1
    }
    console.log("Sum of all numbers in array:" + sum);
}

calculateSumOfAllNumbersInArray(myScores)

myFriends.push("uone")
console.log(myFriends)
var newFriend = prompt("Enter friend name: ")
myFriends.push(newFriend)
console.log(myFriends)