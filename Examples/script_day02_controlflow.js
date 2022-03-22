console.log("Control flow statements")

//When you as a developer have to deal with conditions
//then you have to use control flow statements
var score = 90

if (score >= 88 && score < 90) {
    console.log("You have scored " + score)
    console.log("Keep it up")
}


if (score >= 90) {
    console.log("You have scored " + score)
    console.log("Excellent")
}


console.log(score >= 90)
var pass = true
if (pass) {
    console.log("I am certified software engineer!")
}
 
//if - else
if (pass) {
    console.log("I am certified software engineer!")
} else {
    console.log("I am yet to get certified in software engineering!")
}

academy = "Air Asia Academy"
topic = "SE" // SM, DS, SE

if(academy == "Air Asia Academy"){
    console.log("I am learning from " + academy)
    if (topic == "SE") {
        console.log("I will be the software enginner")
    }
    if (topic == "DS") {
        console.log("I will be the Data Scientist")
    }
    if (topic == "DM") {
        console.log("I will be the Digital Marketing Executive")
    }

}else{
    console.log("I am learning from another academy!!!!");
}





