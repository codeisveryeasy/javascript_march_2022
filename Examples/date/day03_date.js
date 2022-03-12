console.log("Working with Date in JS")

var today = new Date()
console.log(today)
console.log(today.getDate())
console.log(today.getMonth())
//the number of milliseconds since January 1, 1970, or epoch
console.log(today.getTime())

//set your custom date and time
var customDate1 = new Date(2020, 0)
console.log(customDate1)

var customDate2 = new Date(2020, 7)
console.log(customDate2)
//(year, month date, hour, min, sec, ms)
var customDate3 = new Date(2020, 7, 31, 13, 45, 44 )
console.log(customDate3)