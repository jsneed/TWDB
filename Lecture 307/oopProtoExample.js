function Person(name){
    this.name = name;
    this.sayHi = function(){
        return "Hi " + this.name;
    }
}

var elie = new Person("Elie");
elie.sayHi(); // Hi Elie

// The code above works but it it inefficient. Every time we make an object using the new keyword,
// we have to redefine this function. But its the same function, so should put it on prototype instead.


function Person1(name) {
    this.name = name;
}

Person1.prototype.sayHi = function() {
    return "Hi " + this.name;
}

var elie = new Person1("Elie");
elie.sayHi(); // Hi Elie
