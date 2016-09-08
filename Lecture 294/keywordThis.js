var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
};

person.sayHi(); // "Hi Colt"
person.determineContext(); // true

person.dog.sayHello(); // "Hello undefined"
person.dog.determineContext(); // false
