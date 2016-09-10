var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + (a+b+c+d);
    }
};

var elie = {
    firstName: "Elie"
};

colt.sayHi(); // "Hi Colt"
colt.sayHi.apply(elie); // "Hi Elie"

colt.addNumbers(1,2,3,4); // Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4); // Elie just calculated 10
colt.addNumbers.apply(elie, [1,2,3,4]); // Elie just calculated 10


var elieCalc = colt.addNumbers.bind(elie,1,2,3,4); //create a function
elieCalc(); // Elie just calculated 10

var elieCalc2 = colt.addNumbers.bind(elie,1,2); //create a function
elieCalc(3,4); // Elie just calculated 10
elieCalc2(3,4); // Elie just calculated 10
elieCalc2(3); // Elie just calculated NaN
elieCalc2(3,8); // Elie just calculated 14
elieCalc(3,8); // Elie just calculated 10
