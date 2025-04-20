// Js is a single threaded language, but it has capabilities to handle asynchronous operations using the event loop.

// Diff b/w [var, let, const];
// these are are used to declare variables in js;

// var => it has global scope, means it is hoisted at the time of declaration and memory me isko undefined ke sath store/initialize kr liya jata hai, and can be redeclared and updated in the same scope; means we can assign same name to the variable and also updated it after assign some value;
console.log(name); // undefined
var name = "Gaurav"; // hoisted

// let => it has block scope, it is also hoisted but it is not initialized with undefined, it is not accessible before declaration, we cannot re-declare the variable using the let menas ham ek naam ke 2 variable nahi bana sakte hai, but we can updated it for 2nd time, after assign some value  
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "Gaurav"; // hoisted but not initialized
let name = "ok"; // SyntaxError: Identifier 'name' has already been declared
name = "Updated Name";

// const => is also has block scope, it is not hoisted and initialize;hm isko na re-declared kar skte hai naa hm isko update kr skate hai 2nd time aslo because it is contants and they are never change;
console.log(name); // ReferenceError: Cannot access 'name' before initialization
const name = "Gaurav"; // hoisted and initialized


//? Based on the concept of hoisting, we have one question called "What is Temporal Dead Zone (TDZ) in JavaScript?"?

// when we declare a vaiable using let and const but not assign any value to them so the variabls are in the TDZ, means they are not accessible before declaration and initialization; so if we try to access them before declaration and initialization, it will throw a ReferenceError;


//? What is the difference between null and undefined in JavaScript?
// null is a value that represents the intentional [Jaan booj kar] absence of any object value; it is an object type; it is assigned to a variable as a representation of no value; it is a primitive value;
console.log(typeof null); // object
console.log(null == undefined); // true
console.log(null === undefined); // false

// undefined is a variable that has been declared but has not yet been assigned a value; it is a type of its own; Means undefined, it is a primitive value also; it is also the default value of a variable that has been declared but not assigned a value;

// here we declare variable but not assign any value to it so it is undefined;
let name;
console.log(name); // undefined
console.log(typeof undefined); // undefined


//? What is the difference between == and === in JavaScript?
// == is called loose equality operator; it checks for value only; Not the types of the values; it performs type coercion if the types are different; means it converts one type to another type before comparison;

console.log(true == 1) // true ( perform type coercion on true);
console.log(false == 0) // true
console.log({} == {}) // false; because they are different objects in memory; they are not same object; so it will return false;

// === is called strict equality operator; it checks for both value and type; it does not perform type coercion; means it does not convert one type to another type before comparison; so if the types are different, it will return false;
console.log(true === 1) // false ( not perform type coercion on true);
console.log("" === "") // true; both are empty strings;


//? what is type coercion & Conversions in js?
// type coercion means converting the value of one data types to another data  types; it is done automatically by js; it is called implicit type coercion; means js will do it for us;
// for example, when we use + operator with string and number, it will convert the number to string and then concatenate them;

// Conversions or Explicit type coercion means we are converting the value of one data types to another data types manually; it is done by us; we can use Number(), String(), Boolean() functions to convert the values from one type to another type;

let a = 10;
let b = String(a) // convert number to string;
console.log(typeof b); // string
console.log(b); // "10"

//? what is primitve and (Non-primitive) reference data types in js?
// prmitives data types are the basic data types in js; they are immutable; means we cannot change their values; they are stored in stack memory; they are passed by value; means when we assign a primitive value to a variable, it creates a copy of the value in the memory; and when we assign the same value to another variable, it creates a new copy of the value in the memory;

let x = 10;
let y = x; // x is copied to y;
y = 20; // y is updated with new value;
console.log(x); // 10 (original value of x)

// Non-primitive data types are the complex data types in js; they are mutable; means we can change their values; they are stored in heap memory; they are passed by reference; means when we assign a non-primitive value to a variable, it creates a reference to the value in the memory; and when we assign the same value to another variable, it does not create a new copy of the value in the memory; it just creates a reference to the same value in the memory;

let obj1 = { name: "Gaurav" };
let obj2 = obj1; // obj1 is referenced to obj2;
obj2.name = "Updated Name"; // obj2 is updated with new value;
console.log(obj1.name); // "Updated Name" (original value of obj1.name)


//? Control flow in Js?
//Control flow in JavaScript refers to the order in which code is executed in a program. It determines how decisions are made and how loops are managed to dictate the flow of the program;

//It is related to the loops in js;



//? Loops in Js?
//for loop (start, end, condition to perform)
for(let i=0; i < 5; i++){
    console.log(i);
};

// while loop (condition to perform)
while(5 < 0){
    console.log(5);
    break; // if we want to break the loop after first iteration then we can use break statement;
};

// if-else or if-else-if-else statements
if(true){
    console.log("Condition is true");
} else {
    console.log("Condition is false");
};

//switch loops
switch(true){
    case "ADD":
        console.log("Addition");
        break;
    default:
        console.log("Unknown operation");
        break;
};

// do-while ( do your work until conidition is true);
let count = 0;
do {
  console.log(`Count is ${count}`);
  count++;
} while (count < 5);


// Ternary operator
const data = true;
data ? console.log(data) : "no data available";
//true output
