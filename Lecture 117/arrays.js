function printReverse(arr)
{
    for(var i = arr.length - 1; i >= 0 ; i--)
    {
        console.log(arr[i]);
    }
}

function isUniform(arr)
{
    var current = arr[0];
    for(var i = 1; i < arr.length; i++)
    {
        if(arr[i] !== current) return false;
    }
    return true;
}

function sumArray(arr)
{
    var result = 0;
    arr.forEach(function(num, i) {
        result += Number(num);
    });
    return result;
}

function max(arr)
{
    var currentMax = Number(arr[0]);
    for(var i = 1; i < arr.length; i++)
    {
        if(Number(arr[i]) > currentMax) currentMax = Number(arr[i]);
    }
    return currentMax;
}

var arr;

arr = ["a", "b", "c", "d"];
console.log("Print Reverse Array: ");
printReverse(arr);
console.log("Actual Array: " + arr);
console.log("***************");

arr = ["r", 14, "r", "r"];
console.log("Is Uniform Array: " + isUniform(arr) + "\t Array: " + arr);
console.log("***************");

arr = ["r", "r", "s", "r"];
console.log("Is Uniform Array: " + isUniform(arr) + "\t Array: " + arr);
console.log("***************");

arr = ["r", "r", "r", "r"];
console.log("Is Uniform Array: " + isUniform(arr) + "\t Array: " + arr);
console.log("***************");

arr = [7, 7, 7];
console.log("Is Uniform Array: " + isUniform(arr) + "\t Array: " + arr);
console.log("***************");

arr = [1, 8, 7];
console.log("Is Uniform Array: " + isUniform(arr) + "\t Array: " + arr);
console.log("***************");

arr = [1, 8, 7];
console.log("Sum of Array: " + sumArray(arr) + "\t Array: " + arr);
console.log("***************");

arr = [1, 8, 7, -10];
console.log("Max of Array: " + max(arr) + "\t Array: " + arr);
