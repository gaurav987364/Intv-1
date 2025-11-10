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

// if-else or if-else-if-else statements...
if(true){
    console.log("Condition is true");
} else {
    console.log("Condition is false"); 
};

//switch loops
switch(true){
    case "ADD":
        console.log("Addition+++");
        break;
    default:
        console.log("Unknown operation...");
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


//? Compose & Pipe Operator;
// Compose means function composition like:-
const add = (x)=>x+5;
const multiply = (x)=>x*2;
const compose = (f,g)=>x=>f(g(x));
const res = compose(multiply,add);
console.log(res(2,4));

// eg: for n number of arguments
//Problem statement => we have to create one Compose function which take (n) number of function and return the new function which take initial value and perform operation from end to start direction and retun the result;

const addFive = (x)=>x+5;
const subtractFour = (x) => x-4;
const multiplyThree = (x)=>x*3;

const evaluate = Compose(addFive,subtractFour,multiplyThree);
console.log(evaluate(2));  //7 output => 2*3 =>6 => 6-4=>2=> 2+5=>7
function Compose(...fns){
    return function(initialValue){
        let result = initialValue;
        for (let i=fns.length-1; i>=0; i--) {
            result = fns[i](result);
        }
        return result;

        //second solution (reduce work as pipe reduceRight work as compose)
        // return fns.reduceRight((acc,curr)=>{
        //     return curr(acc);
        // },initialValue);
    }
}; 

// ham sabse pahle result ko initial value rakh rahe hai, then hm loop krege from back recieving each functio one by one and call them by providing a result/initialValue and also update the result with that function result and return it;

//Pipe it is just opposite of the Compose ok means it takes function from left-to-right and solve it;
function Pipe(...fns){
    return function(init){
        let result = init;
        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }
        return result;

        //second solution (reduce work as pipe reduceRight work as compose)
        // return fns.reduce((acc,curr)=>{
        //     return curr(acc);
        // },initialValue);
    }
};
const evaluateByPipe = Pipe(addFive,subtractFour,multiplyThree);
console.log(evaluateByPipe(2)); //9



//! Pattrens in Js :-

// Singleton Pattern,
// Purpose=> Ensures that a class has only one global instance and provides a global access point to it;
//Means hamari global class ka sirf ek hi instance create hoga of ek hi access point hoga uske methods ke liye;

// Where it's used: Useful for managing global application states, logging, configuration settings, or caching.

// Real-world example: Suppose you need a single DatabaseConnection object in your app to prevent multiple connections to the database:
class Singleton{
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.connection = "Database connection established."
    }

    getConnection(){
        return this.connection;
    }
}
const db1 = new Singleton();
console.log(db1.getConnection());//Database connection established.



// Module and Revealing Module Pattern
// => Encapsulates functionality and provides public methods, hiding implementation details;
// => Means => public ko methods provide krna taki user apna kaam kar skae but hide krdena un methods ki functionality ko ki vo kis tarah se bane hue hai just like ham javascript me bhaut sare in built methods ka use krte hai like Map,filter,reduce etc. to hme thodi patahai ye kese behind the scene work kar reh hai hai ya inka code kya hai hme to sirf javascript walo ne de rkhae hai use krne ke liye to is chij ko Module or Module revealing pattren bolte hai ok

// eg: shopping cart:-
const shoppingCart = (()=>{
    const cart = [];

    //methods
    const addItems = (item)=> cart.push(item);
    const getItems = ()=> cart.slice();

    //give methods to public
    return{
        addItems,
        getItems
    }
})();
shoppingCart.addItems({name:"Socks", price:"$99",quantity:2});
console.log(shoppingCart.getItems());




// Factory Pattern
// Purpose: Creates objects without specifying their exact classes. It centralizes object creation logic.

// => just like the name factory, jisme in factory many items are created ok, factory is centralize by itself; but we use items anywhere;
class Dog {
    speak() {
      console.log("Woof!");
    }
}
  
class Cat {
    speak() {
      console.log("Meow!");
    }
}
  
const AnimalFactory = {
    createAnimal(type) {
      switch (type) {
        case "dog":
          return new Dog();
        case "cat":
          return new Cat();
        default:
          throw new Error("Invalid type");
      }
    }
};
  
const dog = AnimalFactory.createAnimal("dog");
dog.speak(); // Woof!

const cat = AnimalFactory.createAnimal("cat");
cat.speak(); // Meow!



// Observer Pattern
//used in real time state changes senarios;
// => Observer pattren allows a subject to notify multiple observers about state changes;Its ideal for handleing Ui updates and real time responses;

//eg: => chat Notify system :-
function Subject(){
    this.observers = [];
}

Subject.prototype.addObserver = function(observer){
    this.observers.push(observer);
}

Subject.prototype.notify = function(message){
    this.observers.forEach(obs => obs.update(message))
}

function Observer(name){
    this.name = name
}

Observer.prototype.update = function(message){
    console.log(`${this.name} recieved message ${message}`)
}

const subject = new Subject();
const observer1 = new Observer("Gaurav");
const observer2 = new Observer("Yash");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hi Bro..."); //Both receieves same message;




// Strategy Pattern
// Purpose: Defines a family of algorithms, encapsulates them in separate classes, and makes them interchangeable.
// Where it's used: Useful for scenarios requiring different behaviors that can be swapped dynamically, like payment methods or sorting algorithms.
// Real-world example: Implementing a payment processing system:
class PayPal {
    processPayment(amount) {
      console.log(`Processing PayPal payment of $${amount}`);
    }
};
  
class Stripe {
    processPayment(amount) {
      console.log(`Processing Stripe payment of $${amount}`);
    }
};
  
class PaymentProcessor {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    process(amount) {
      this.strategy.processPayment(amount);
    }
}
  
const paymentProcessor = new PaymentProcessor();

const payPal = new PayPal();
paymentProcessor.setStrategy(payPal);
paymentProcessor.process(100); // Processing PayPal payment of $100

const stripe = new Stripe();
paymentProcessor.setStrategy(stripe);
paymentProcessor.process(200); // Processing Stripe payment of $200

//?Summary:
// - Singleton: Ensures only one instance, ideal for global objects.
// - Module: Encapsulates functionality, great for reusable code.
// - Factory: Centralizes object creation, useful for varying object types.
// - Observer: Manages subscription and notification systems.
// - Strategy: Makes algorithms interchangeable dynamically.



// Event Emitter :-⭐⭐interview question

// basically there is a term gang of 4 (they are 4 peoples who wrote book of 23 design pattrens)
// there are basically 3 types of pattrens:-
// 1. Creational pattrens:-
// 2. Structural pattrens:-
// 3. Behavioral pattrens:-

// and then have more sub-types of them (so event emmiter is comes under ovserver pattren which is type of behavioral pattren)


class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    (this.events[event] ||= []).push(listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  emit(event, ...args) {
    (this.events[event] || []).forEach(listener => listener(...args));
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}
// Usage example
const emitter = new EventEmitter();
emitter.on('data', data => console.log(`Data received: ${data}`));
emitter.emit('data', 'Hello, World!'); // Data received: Hello, World!
emitter.once('onceEvent', () => console.log('This will only run once.'));
emitter.emit('onceEvent'); // This will only run once.
emitter.emit('onceEvent'); // No output, as the listener has been removed after the first call.
//? Summary:
// - EventEmitter allows you to create custom events and manage listeners.
// - It supports adding, removing, and emitting events.
// - The `once` method allows you to listen for an event only once before it is automatically removed.
// - Useful for building event-driven architectures, like in Node.js or browser applications.
//? Summary of the code:
// - The `EventEmitter` class manages events and listeners.
// - The `on` method adds a listener for a specific event.
// - The `off` method removes a specific listener for an event.
// - The `emit` method triggers an event, calling all registered listeners for that event.
// - The `once` method adds a listener that is automatically removed after it is called once.


// Q: what is the output?
const users = {
  gaurav:{},
  yash:{},
  rahul:{}
};

let rahul = 'rahul';
// ab agar hamare pass idhr ho 'toString' or 'constructor' jo ki prototype pe exit krete hai to bi true dega ok

console.log(users[rahul]); // {}
if(users[rahul]){
  console.log('rahul exists...');  //✅ comes because if block me vo only key ko nahi but object ke prototype pe bhi check krega usko isliye true
} else {
  console.log('rahul does not exist...');
}