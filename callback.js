// function sayHello(name) {
//     console.log("Hello, " + name);
// }
// function greet(callback){
//     callback("Kabir"); // calls the function you passed in
// }
// greet(sayHello); // Output: Hello, Kabir
// Asynchronous Javascript example

// function display(something) {
//     console.log(something);
// }

// function calculate(num1, num2, callback) {
//     sum = num1 + num2;
//     callback(sum);
// }
// calculate(5, 6, display);
// Or We can the write the display function directly in the parameter of calculate function with its working.
/* 
    calculate(5, 6, function display(something){
        console.log(something);
    });

*/

// Another example of callback function

function SayhisName(name) {
    console.log("Hello, " + name);
}

function greet(person1, person2, callback, name) {
    console.log("How are you, " + person1 + " and " + person2 + "?");
    if (typeof callback === "function")
        callback(name);
}
greet("Kabir", "Humaian", SayhisName, "Eham");
/*
    typeof callback === "function" checks if the callback variable is actually a function.
1. If it is a function, then callback(name); calls that function and passes name as its argument.
2. If callback is not a function (maybe it’s undefined or something else), then nothing happens and no error occurs.
    Why is this useful?
   => If you call your main function without passing a callback, this check prevents errors.
      It makes your code safer and more flexible.
    Summary:
    =>This code checks if callback is a function before trying to call it, 
      preventing runtime errors.
*/


// If a function is passed as an argument to another function, it (argumented funciton) is called a callback function.
// Callback functions are often used for asynchronous operations, like handling events or making API calls.