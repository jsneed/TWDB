function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning) return "beep";
}

var car1 = new Vehicle("Honda", "Civic", 2008);

car1.honk(); // undefined
car1.turnOn();
car1.honk(); // beep
car1.turnOff();
car1.honk(); // undefined
