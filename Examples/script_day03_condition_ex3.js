console.log("If condition exercise")

//check if given number is even or odd
//even -> any number divisible by 2
//odd -> any number not divisible by 2
//even -> 2, 4, 6, 8, 10, 12, 14 ...
//odd -> 1, 3, 5, 7, 9, 11, 13, 15 ...

//use modulus operator
console.log(21 % 2)             //odd
console.log(32 % 2)             //even
console.log(1789 % 2)           //odd
console.log(456487987892 % 2)   //even

var n1 = prompt("Input any number: ")

var myNumber = parseInt(n1)

if(myNumber % 2 == 1){
    console.log(myNumber + " is odd number")
    alert(myNumber + " is odd number")
}

if(myNumber % 2 == 0){
    console.log(myNumber + " is even number")
    alert(myNumber + " is even number")
}



console.log("Alert will stop the execution till OK is clicked!")