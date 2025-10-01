let sayHello = 'hi'; // Global scope
const x = 10; // const make the variable unchangeable. and you have to give the value instantly not later.
// x = 20;  it will give error because const variable cannot be changed.
a = () => {
    let name = "kabir"; // Block scope in function a
    age = 25; // Global scope
    console.log(name);
    console.log(sayHello);
}
// here let keyword defines the scope of the variable name to the function a only.
// otherwise it can be accessed outside the function a.
a();
// console.log(name); // it will give error because name is not defined outside the function a.
console.log(age);

