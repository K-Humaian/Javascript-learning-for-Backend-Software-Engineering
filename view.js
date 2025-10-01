// introduction to javascript for Backend Software Development

// javascripts by default scope is global scope.
// scope means where the variable is accessible.
console.log("Hey there! it's Kabir here");
name = "Kabir"; // global scope
/*
You are assigning a value to name without using var, let, or const.
This creates a global variable, but it's considered bad practice and deprecated because:

It implicitly creates a property on the global object (window in browsers, global in Node.js).
It can lead to bugs and unpredictable behavior.
Modern JavaScript recommends declaring variables explicitly with let, const, or var.
 */
let naam = "Kabir";
function greet() {
    console.log(naam);
}
greet();
// Javascript is a functional programming language.
// functions are treated as first class citizens in javascript.
// first class citizens means functions can be passed as arguments to other functions, returned from other functions, and assigned to variables.
// If a variable is declared and assigned a value later we can also assign
// a function to it.
a = 90;
console.log(a);
a = "Eham";
console.log(a);
a = function () { }
console.log(a);

// Javascript functions can take a function as value of a variable 
/* because : In JavaScript, functions are first-class citizens, 
    meaning you can:
        1. Assign a function to a variable
        2. Pass functions as arguments to other functions
        3. Return functions from other functions 
*/
console.log("----------------------------------------------------");
function printName(value_one, value_two) {
    console.log(value_one, value_two);
}
// printName("humaian", "Kabir");
printName(function name() { }, function address() { }); // it will be called higher order function.

// A function is called  higher order function when it 
// takes a function as an argument or returns a function as a result.

// Example of higher order function
function Name(v1, v2) {
    console.log(v1);
    return v2;
}
// pure function
function add(a, b) {
    return a + b; // no siede effects, always determinstic
}
a = add(2, 3); // 5
console.log(a);
// ------------------------------------------------------------------------------


// Example of returning a function from another function
// closure in javascript
function innerFunction() {
    let name = "Md. Humaian Kabir";
    return function outerFunction() {
        console.log("I am outer function", name);
    }
}
result = innerFunction();
console.log(result); // it will print the function definition [Function: outerFunction]).
result(); // it will print "I am outer function" and Md. Humaian Kabir
// because result is now a reference to outerFunction, so calling result() executes outerFunction.

/* 
==> Closure is a feature in JavaScript where an inner function has access to the variables, 
parameters, and functions of its outer (parent) function, even after the parent function has finished executing.
This allows the inner function to “remember” and use the scope in which it was created.
Closure means:

    1.The inner (returned) function “remembers” the scope in which it was created.
    2. It can access variables, parameters, and functions defined in the parent (innerFunction), 
    even after the parent has finished executing.
 */
