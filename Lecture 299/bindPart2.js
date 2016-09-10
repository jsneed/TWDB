var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }, 1000)
    }
};

colt.sayHi(); // Hi undefined (1000 milliseconds later), this in setTimeout refers to the window

var colt2 = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }.bind(this), 1000)
    }
};

colt2.sayHi(); // Hi Colt (1000 milliseconds later)
