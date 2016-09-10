function outer(a){
    return function inner(b){
        // the inner function is making use of the variable "a"
        // which was defined in an outer function called "outer"
        // and by the time this is called, that outer function has returned
        // this function called "inner" is a closure
        return a + b;
    }
}

outer(5)(5); // 10

var storeOuter = outer(5;
storeOuter(10); // 15





function classRoom(){
    var instructors = ["Colt", "Elie"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom();
course1.getInstructors(); // ["Colt", "Elie"]
course1.addInstructor("Ian"); // ["Colt", "Elie", "Ian"]
course1.getInstructors(); // ["Colt", "Elie", "Ian"]

course2 = classRoom();
course2.getInstructors(); // ["Colt", "Elie"] - not affected by course1

// we also have NO access to the instructors variable
