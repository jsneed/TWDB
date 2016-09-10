function outer(){
    var data = "closures are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

outer(); //returns the function inner

outer()(); // "closures are awesome" - executes the inner function right away
