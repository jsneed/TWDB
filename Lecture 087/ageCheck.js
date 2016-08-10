var ageStr = prompt("How old are you?");

var age = parseInt(ageStr);

if(age < 0)
{
    console.error("The age you entered is invalid");
}
else if(age === 21)
{
    console.log("Happy 21st Birthday! You get a free shot");
}
else if((age % 2) != 0)
{
    console.log("Your age is odd");
}
else if((Math.sqrt(age) % 1) === 0)
{
    console.log("Perfect square!");
}
