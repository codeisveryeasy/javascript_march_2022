console.log("Loops")

/*
 Loops -> Something which repeats over
 and over again till the condition is reached
 where it will stop.

 i.e. every loop should always have the condition 
 where it should be stopped else, loop will fall into the 
 trap of infinite loop.
*/

score  = 0

while (score <= 10) {
    console.log("Inside loop as condition returned true")
    console.log(score)
    score  = score + 1
    if(score == 5){
        break
    }
}

console.log("Exited the loop as condition was fulfilled.")