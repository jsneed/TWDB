// Constructor function
function Person(name) {
    this.name = name;
}

Person.prototype; // returns empty object

// These are objects created from the Person Constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

Person.prototype.isInstructor = true;

elie.isInstructor; // true
colt.isInstructor; // true

// how were we able to access properties on the prototype? __proto__


dir(elie);
