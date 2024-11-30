// // Printing 
// console.log("Hello world!");

// // Data Types and variables
// var varName = "Amr"

// varName = 6

// let ourName = "AMR YASSER"

// const pi = 3.14

// // Storing variables

// var x; // Semi-colon is not required in JavaScript but it can be useful
// // for debugging and knowing where the line ends
// var y = 2;
// console.log(x);
// a = 7;

// b = a;

// console.log(a)


// var a = 9;

// var x = 5;
// var y = 10;
// var z = "I am a";

// x = x + 1;
// console.log(x);

// y = y + 5;
// console.log(y);

// z = z + " string";
// console.log(z);

// The capatilization matters
var amr; // !=
var Amr;

// a backslash '\' is to escape any character
// And strings can be either be surrounded by a single quote 
// or a double quote

// .length is the length of the string

var firstName = "abcdefghijklmnopqrstuvwxyz"
console.log(firstName.length); //26

// console.log(firstName[-1]); Won't work, because in JS strings doesn't support
// negative indexing like array do
// You can use "charAt", "slice", or "at" instead

console.log((firstName[firstName.length - 1]));
console.log(firstName.charAt(firstName.length - 1));
console.log(firstName.slice(-1));
console.log((firstName.at(-1)));


// array

var Array = ["Amr", 123];

// nested array or multidimensional array

var myArray = [["amr", 123], ["Yasser", 321]];

// .unshift() adds an element to the beginning of the array
// .push() adds an element to the end of the array
// .pop() removes the last element of the array
// . shift() removes the first element of the array

// Functions

function ourResuableFunction() {
    console.log("Hello from our function");
}

ourResuableFunction();

function functionwithArgs(a, b) {
    console.log(a + b);
}

functionwithArgs(5, 10);// Printing 


// Global scope

var myGlobal = 10; // like this

function fun1() {
    // var oopsGlobal = 5; this will be scoped to this function
    // (local variable) 
    oopsGlobal = 5; // but this will be global 
}

// Local variables takes precedence over global variables
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit()); // sweater
console.log(outerWear); // T-Shirt

// Undefined value returned from a function
var sum = 0;
function addThree() {
    sum += 3;
}

console.log(addThree()); // Undefined 

// Assignment with a returned value 