var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var elie = {
    firstName: "Elie"
};

colt.sayHi(); // "Hi Colt"
colt.sayHi.call(elie); // "Hi Elie"
