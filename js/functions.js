//** All About functions in Js */

// Function declaration
function myFunctionDeclaration() {} // is called the function declaration

// Funstion initialization
//? after make the function declaration now we have to called the function for excute the code isnide it now it is callled the function, is called function initialization

// function expression
const myFunctionExpression = function () {}; // is called the function expression

// question on function declaration vs expression
console.log(myFnc());
function myFnc() {
  console.log("this is function declaration.");
}
console.log(myFnc());
var myFnc = () => {
  console.log("this is arrow function & also anonymous function as well");
};
console.log(myFnc());
var myFnc = function () {
  console.log("This is function expression.");
};
console.log(myFnc());
// this is function declaration.
// this is function declaration.
//this is arrow function & also anonymous function as well
//This is function expression.

// Types of functions
// normal function are aslo called the function declaration as well.
// arrow function
// anonymous function

// difference between named vs anonymous functions
//? named function means we can decalre a function with a specific name which is useful for code readablity and easier to identify in stack traces during deubugging.

//? anonymous fuctions basically these are the function with no specific name and we are gerenally assign to any variable or used them as a callbacks, arrow functions are also known as anonymous functions.

// difference between normal and arrow functions
//? we use the normal function mainly when we are working with objects, defining constuctors or normal function have this binding means own this so that they takes from the parent or where they calls

//? we use arrow function for shorter syntax, arrow functions dost not have own this they take it from sorroundings, which is better.
// this keyword
//? it refers to the context in which a function is called.
//? it is also called implicit binding, this in regular functions bind dynamically, where in arrow function it takes from sourrounding,
//? we can change this implicit binding using call, bind and apply.

console.log(this); // In browsers (global context): Window object
const obj = {
  name: "Gaurav",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet(); // Output: "Gaurav" (In block scope)

function sayHello() {
  console.log(this);
}
sayHello(); // Non-strict mode: Window object, Strict mode: undefined

const obj1 = {
  name: "Gaurav",
  arrowFunc: () => {
    console.log(this.name);
  },
};
obj1.arrowFunc(); // Output: undefined (in browsers/global scope)

//! in class this refers to instance of the class;
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

const person = new Person("Gaurav");
person.sayName(); // Output: "Gaurav"

// Question based on that this;
var length = 20;
function setContext() {
  console.log(this.length);
}
const OBJ = {
  length: 30,
  fnc: function (args) {
    setContext(); // now this sets the context value
  },
};
console.log(OBJ.fnc()); // guess the output // 20; not 30; becaause it points to global scope not this object scope;

var length = 1;
function count() {
  console.log(this.length);
}
const arr = [count, "ABC", 20, {}];
console.log(arr[0]());
//? now the output is 4 because count function is setting the context over arr not getting the global length; so it print arr.length ok

// call, bind and apply functions
//? these are also known as explicit binding, we used these methods for setting the value of this context.

// as we know in js object and function are allocated to new memory everytime they created which is casuing performnce issues so we are using these methods , let suppose we make one object and fro that we have to define function which worrks same for all, so why we need to create function inside any object we simple set the this context of this

//? cal take that object jiski property use krni hai or  takes parametres (normally) jo us method me bjnne hai;
const dataset = {
  name: "Raju",
};
// now we have to set this of object
function sayHii(message) {
  console.log(this.name + "Says Hiii." + message);
}
const newObj = sayHii.call(dataset, "From Haryana.");
console.log(newObj);
//This not return undefined because idhr function sayHi kuch return nhai krr rha hai khud se ok agar hme return laga de console.log() ke aage or fir kuch kare to undefined ata hai because function not return anything

//? apply take paramtres in form of array;
const user = {
  name: "User1",
};
function doGreet(age, sex, height, dob) {
  console.log(
    this.name +
      " Of " +
      age +
      " & " +
      sex +
      " & " +
      height +
      " & have " +
      dob +
      " Says Hello"
  );
}

const newUser = doGreet.apply(user, [23, "Male", "6ft", "02/12/2000"]);
console.log(newUser);

//? bind provide us with a new resuseable function which we can call later;

const Obj = {
  name: "Bablu",
};
function setContext(age) {
  console.log(this.name + ` ${age}`);
}
const NewFunctionFromBind = setContext.bind(Obj);
console.log(NewFunctionFromBind(20));

//? some More examples on call, bind and apply;

// getting one function from one object and call it on second;
const student1 = {
  name: "Gaurav",
  marks: [90, 85, 88],
  calculateAverage: function () {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  },
};

const student2 = {
  name: "Priya",
  marks: [80, 75, 95],
};
const avgMarks = student1.calculateAverage.call(student2);
console.log(avgMarks);

const numbers = [23, 45, 67, 12, 89];
const maxValue = Math.max.apply(null, numbers);
console.log(`Max Value: ${maxValue}`);
// Output: Max Value: 89

function logMethodDetails(func, context, ...args) {
  console.log(`Calling function: ${func.name}`);
  return func.call(context, ...args);
}

const mathOperations = {
  number: 10,
  multiplyBy: function (factor) {
    return this.number * factor;
  },
};

const result = logMethodDetails(mathOperations.multiplyBy, mathOperations, 5);
console.log(`Result: ${result}`);
// Output:
// Calling function: multiplyBy
// Result: 50

function displaySkills(skill1, skill2, skill3) {
  console.log(
    `${this.name} is skilled in ${skill1}, ${skill2}, and ${skill3}.`
  );
}

const Person = { name: "Gaurav" };

const skills = ["JavaScript", "React", "Node.js"];

// Using `apply` to pass skills as an array
displaySkills.apply(Person, skills);

// Using `call` to pass skills as separate arguments
displaySkills.call(Person, ...skills);

// Using `bind` to create a pre-bound version for later use
const displayBoundSkills = displaySkills.bind(Person, "JavaScript", "React");
displayBoundSkills("Node.js");

//! NOTE :- call, bind apply is not working with arrow functions ok;
//! Note :- chaing of bind , call, apply method over bind,call,apply is not woking ok;

// function closures , lexical scope and currying functions
//? closure is not a thing but closure is a phenomena, when an inner or child function uses the value of the parent functions the closure is created
//? inner function outer function kee variable ko use krke uske around closure create kr leta hai and then baad me usko update krta hai, like parnet function ke execution ya run hone ke baad bhi uske pass ability hai ki update kr ske value of variable ko;
function count() {
  let count = 0;
  return function childcount() {
    console.log("Closure is created.");
    count++;
  };
}
const res = count();
console.log(res); // return function body
console.dir(res); // we check closure is creted or not
console.log(res()); //increse count
console.log(res());
console.log(res());
console.log(res());
//! so at value of count is 4 in the closure;
//? we can use closure for making secret variable, data encapsulations etc.

//? lexical scope => In simple language, lexical scope is, a variable defined outside your scope or upper scope is automatically available inside your scope which means you don't need to pass it there, like in closures inner function uses outside variable ok.

//? curring in js =>Currying in JavaScript is a functional programming technique where a function is transformed into a series of functions, each taking a single argument. Instead of providing all arguments to the function at once, you provide them one at a time.

// =>Currying is the process of breaking down a function that takes multiple arguments into a sequence of functions, each taking one argument.

function curriedfunction(a) {
  return function child1fnc(b) {
    return function child2(c) {
      return function child3(d) {
        return (a + b + c + d / 4) * 100;
      };
    };
  };
}
console.log(curriedfunction(2)(3)(4)(5));

//? Infinite currying :-
// this is also a currying in js but we used this approach when we are not write a n number of function for n number of arguments so we used the infinite curying;

//understand the way of writing this method ok;

function infiniteCurry(a) {
  return function childFnc(b) {
    if (!b) return a;
    return infiniteCurry(a + b);
  };
}
console.log(infiniteCurry(2)(3)(4)(5)(6)(7)());

//Function Composition:
//? Function composition is the process of combining two or more functions to produce a new function that executes the individual functions in a specified sequence.

// For eg :- we have two function f and g, now by composing them to make new function h is called function composition;   {h(x) = f(g(x));}

//Note :- sequence of passing function to new function is matters ok

const add = (x) => x * 2;
const double = (x) => x * x;
const composeCalculation = (f, g) => (x) => f(g(x));
const resFnc = composeCalculation(double, add);
console.log(resFnc(2, 3)); // 25 ans

const toUpperCase = (str) => str.toUpperCase();
const appendExclamation = (str) => `${str}!`;

const compose = (f, g) => (x) => f(g(x)); // Same composition logic
const shout = compose(appendExclamation, toUpperCase);

console.log(shout("hello")); // Output: "HELLO!"

// Working with Asynchronous Functions
const fetchData = async () => ({ user: "John", age: 25 });
const transformUser = (userData) =>
  `${userData.user} is ${userData.age} years old.`;

const composeAsync = (f, g) => async (x) => f(await g(x));

const getUserDescription = composeAsync(transformUser, fetchData);

getUserDescription().then(console.log); // Output: "John is 25 years old."
// ...etc

//** Question and Custom Methods in Js */

// Q:Debounce Function
// Create a debounce function that limits the rate at which a function can fire
function Debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// Q: Write Throttle Function?
function Throttle(fn, delay) {
  let timer = null;
  let lastRan = null;

  return function (...args) {
    if (!lastRan) {
      fn.apply(this, args);
      timer = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (Date.now() - lastRan >= delay) {
          fn.apply(this, args);
          timer = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
};

// important regex for eliminating strings and numbers start with 00
// [/[1-9][0-9]/g,'i']
// Q:Convert Object Keys from snake_case to camelCase
// Provide a function that converts all keys in an object from snake_case to camelCase .
function convertObjectKeysFromSnakeToCamel(obj) {
  if (Object.keys(obj).length === 0) {
    return {};
  }

  const res = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
    res[camelKey] = obj[key];
  }

  return res;
};

console.log(convertObjectKeysFromSnakeToCamel({ user_info: "Gaurav", user_age: 25 }));
// Q:Implement a Simple Event Emitter?

// Q:Memoization for Recursive Functions?
// Design a memoization function that caches results for recursive functions using object keys.

// Q:Redux-Like State Management Library?
// Create a simple state management system (similar to Redux) using functional programming principles.

// Q:N-Queens Problem Using Recursion and Backtracking?
// Solve the N-Queens puzzle by implementing a recursive backtracking algorithm in JavaScript.

// Q:Optimized String Matching Algorithm?
// Implement a highly optimized string matching algorithm (for example, Knuth-Morris-Pratt or Boyer-Moore).

// Q:Reactive Data Binding with Proxies?
// Implement reactive data binding in JavaScript using the Proxy object to detect and react to changes.

// Q:Custom Observable Implementation (RxJS-like)?
// Build an observable/observer system that supports operations like filter, map, and asynchronous subscription.

// //? Methods or reuseable functions or methods mized topics?

// Q: write a function to suffle an array?
function shuffleArray(arr){
  //basically hame random index par values ko assign krna hai 
  for(let i = 0; i < arr.length; i++){
    const randomIndex = Math.floor(Math.random() * arr.length);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};
console.log(shuffleArray([20,30,40,50,60]));

// Q: write a function to provide random game board based on rows and cols?

// Q: write a function to generate UUID's ?

// Q: write a function that print an 6 digits number (OTP) always?
function otp(length=6){
  let otp = "";
  const digits = "0123456789";

  for (let i = 0; i < length; i++) {
    otp+=digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
};
// console.log(otp());

// Q: write a function to check if a number is prime?

// Q: write a function to calculate the factorial of a number?
function factorial(n){
  return n*factorial(n-1);
};

// Q: write a function to convert a number to Roman numeral?

// Q: write a function to convert a number to binary?

// Q: write a function to convert a number to hexadecimal?

// Q: write a function to find GCD?


// Q: Simple Sum Function?
// Write a function that takes two numbers as arguments and returns their sum.

// Q: Arrow Function for Squaring?
// Create an arrow function that accepts a number and returns its square.

// Q:mmediately Invoked Function Expression (IIFE)?
// Write an IIFE that computes and logs the message "Hello, World!".
(function(){
  console.log("Hello, World!");
})();

// Q:Recursive Deep Clone (Basic)?
// Write a function to perform a deep clone of a simple object that may contain nested objects (focus on non-circular references).

// Q:Mini EventEmitter?
// Implement a simple EventEmitter class that supports registering event listeners, emitting events with arguments, and removing listeners. Focus on function binding and ensuring the correct context for callbacks

// Q: LRU cache ?

// Q:Partial Application for Variadic Functions?
// Create a function that supports partial application on functions with any number of parameters (variadic functions), returning a new function that accumulates the arguments until all are provided.

// Q:Tail-Call Optimized Recursive Function?
// Rewrite a recursive function (such as calculating Fibonacci numbers) in a tail-recursive manner and discuss its implications in environments where tail-call optimization is supported.

// Q:Error-Handling Composed Functions?
// Write a Compose (or pipe) function that chains multiple functions together. Ensure that if one function throws an error (or rejects a promise), the error is caught and handled gracefully.

//? More question ?
// Q: write a function that take two array and one number as argument and we have to find pair of array matching that number?
//  like [10,20,30,40,50];
//       [50,60,70,80,90];
//       num = 60
//       [[10,50]] = num;

// Q: write a function to find common element of two arrays and strings?
