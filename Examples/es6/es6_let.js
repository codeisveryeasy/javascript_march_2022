console.log("let keyword")
var score = 8
let insideif = 8888

const academy = "AAA"

function testScope(){
    let insideif = undefined
    let score = 88
    console.log("Score in function scope: " + score)
    if(score > 70){
        let insideif = 11
        console.log("insideif in if scope: " + insideif)
    }
    console.log("insideif outside if scope: " + insideif)

}

console.log("insideif global : " + insideif)
console.log("Score in global scope: " + score)
testScope()

console.log(academy)
//es6_let.js:24 Uncaught TypeError: Assignment to constant variable.
academy = "BBB"
console.log(academy)