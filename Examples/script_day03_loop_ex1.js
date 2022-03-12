console.log("Loop -> exercise 1")

//use loop to get the sum of all numbers 
//till n

/*
n = 5
5 + 4 + 3 + 2 + 1

n = 10
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

*/



// n2 = n1 + 1
// console.log(n2)
// console.log(typeof n2)

//n1 is of type string because prompt function returns string
//i must convert n1 from strin to number if I have to do 
//any mathematical operation with n1
//i can convert any variable which contains numerical value 
// (but is of datatype string ) to number
//I can do that by using function/method called parseInt()
var n1 = prompt("Input the number:")
console.log(n1)
console.log(typeof n1)
var n4 = parseInt(n1)
// console.log(typeof n4)
// var n5 = n4 + 1
// console.log(n5)

console.log("Calculate the sum of all numbers till: " + n4)
var mynumber = parseInt(n4)
//mynumber contains 5
var sum = 0

while(mynumber > 0){
    sum = sum + mynumber
    mynumber = mynumber - 1
}
// 5 + 4 + 3 + 2 + 1
console.log(sum)