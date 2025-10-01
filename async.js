// Js by default is synchronous and single-threaded.
// Synchronous means one thing at a time.
// Single-threaded means one command at a time.
// Asynchronous means multiple things at a time.

// Callback functions are used to handle asynchronous operations.
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");


// Here all the lines will be printed one by one in order because Js is synchronous.
// But if we use setTimeout function then it will be asynchronous. Because setTimeout is an asynchronous function.

let x = 10;
setTimeout(() => { // this function is a callback function bcz it's given as parameter
    while (x--) {
        console.log("Line 4");
    }
}, 3000)
console.log("Line 5");
console.log("Line 6");

// setInterval(()=>{
//     console.log("Line 7");
// }, 2000) // it will run the function every 2 seconds

console.log("Line 7");

result = (data) => {
    console.log("I am the result");
}
result(function () {
    console.log("I am the data");
})