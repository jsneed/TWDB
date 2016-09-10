/*
//Lots of duplication
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    // we can also set properties on the keyword this that are preset values
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}
*/

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    // we can also set properties on the keyword this that are preset values
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    //using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle2(make, model, year) {
    //using apply
    Car.call(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle3(make, model, year) {
    //using apply and arguments keyword
    Car.call(this, arguments);
    this.numWheels = 2;
}
