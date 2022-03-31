console.log("Classes in ES6")

//classes -> blueprint of an object
//blueprint contains the methods 
//and properties for the class

//think of vehicle class

class Vehicle{

    //set properties of the Vehicle class
    //constructor is first thing which is called automatically 
    //whenever the calss instance is created
    constructor(model, color, wheelCount, YearOfMake){
        console.log("Constructor called....")
        this.model = model
        this.color = color
        this.wheelCount = wheelCount
        this.YearOfMake = YearOfMake
        //"this" refers to the current instance of the class
        console.log(this)
    }

    igniteEngine(){
        console.log("Engine igniting...." + this.model)
    }

    getYearOfMake(){
        console.log("Year of make for " + this.model + " is "+ this.YearOfMake)
    }

    setYearOfMake(change, direction){
        if(direction === "up"){
            this.YearOfMake = this.YearOfMake + change
        }
        if(direction === "down"){
            this.YearOfMake = this.YearOfMake - change
        }
    }

}

//create the vehicleSuv instance of type Vehicle
const vehicleSuv = new Vehicle("SUV", "Green", 4, 2021)
console.log(vehicleSuv.color)
console.log(vehicleSuv.YearOfMake)
//get year of make
vehicleSuv.getYearOfMake()
//change the yearOfMake property
vehicleSuv.YearOfMake = 2020
console.log(vehicleSuv.YearOfMake)
//ignite the engine
vehicleSuv.igniteEngine()
//get year of make
vehicleSuv.getYearOfMake()

//create the vehicleTruck instance of type Vehicle
const vehicleTruck = new Vehicle("Truck", "White", 20, 2011)
console.log(vehicleTruck.color)

console.log(typeof vehicleSuv)
vehicleTruck.igniteEngine()
vehicleTruck.getYearOfMake()

vehicleTruck.setYearOfMake(4, "down")
vehicleTruck.getYearOfMake()


vehicleSuv.setYearOfMake(2,"up")
vehicleSuv.getYearOfMake()

//create the vehicleTricycle instance of type Vehicle
const vehicleTricycle = new Vehicle("Tricycle", "black", 3, 2020)
console.log(vehicleTricycle.color)
console.log(typeof vehicleTricycle)

