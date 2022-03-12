console.log("Loop -> exercise 2")
var n1 = prompt("Input the number: ")
//assume myNumber = 4
var myNumber = parseInt(n1)
var counter = 1
var sum = 0

while (counter <= myNumber) {
    sum = sum + counter  // 1, 3, 6, 10
    counter = counter + 1  //2, 3, 4, 5
}

console.log("Sum of all numbers till " + myNumber + " is " + sum)
