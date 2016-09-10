var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var elie = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

colt.sayHi(); // "Hi Colt"
elie.sayHi(); // "Hi Elie"
