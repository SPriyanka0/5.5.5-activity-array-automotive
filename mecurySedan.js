//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")
//extends
class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        //properties
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    //methods
    //loadPAssanger (num)
    loadPassanger(num){
        if(this.passanger < this.maxPassangers){
            availableRomm == true;
        }
    }
    //start ()
    start() {
        if (this.fuel > 0) {
            console.log ("engine started...!!!");
            return this.started = true;
            
        } else {
            console.log("engine cannot start...");
            return this.started = false;
            
        }
    }
    //scheduleService (mileage)
    scheduleService(mileage) {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)