//Q: what are polyfill in js why they uesd?
// ans => polifill are small piece of code that are used to provide modern functionaity to that older browsers that aare not compatible with new things;

//? Note := polifill ko banaya jata hai Prototype par jisse vo belog krte hai like map,filter,reduce are array methods hai to Array.Prototype par hi hm hamare polifill banayge;

// write polifill of :-
// 1.map
// 2.filter
// 3.reduce
// 4.promises
// 5.call
// 6.apply
// 7.bind
// ...etc

//? Map
Array.prototype.myMap = function (items = []) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(items(this[i], i, this));
  }
  return results;
};

//? filter
Array.prototype.myFilter = function (callback) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  };
  return filteredArray;
};

//? Reduce
Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new Error("Provide initial value...");
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
const testarr = [1, 2, 3, 4, 5, 6];
const sum = testarr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);

//? Polyfill of call;
//  we need two things as call methods need that, like one is context, argumnets

Function.prototype.myCall = function (context = {}, ...args) {
  //first check for errors or where my polifil is call
  if (typeof this !== "function") {
    throw new Error(this + " It is not Callable.");
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn; // Clean upp
  return result;
};

const person = { name: "Gaurav" };
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(greet.myCall(person, "Hello", "!")); // Output: "Hello, Gaurav!"

//? apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " It is not Callable.");
  }

  //checking for edge case like if user not pass argument in array format
  if (!Array.isArray(args)) {
    throw new Error("Please Provide arguments into an Array.");
  }

  context.fn = this;
  const results = context.fn(...args);
  delete context.fn;
  return results;
};

const user = {
  name: "Guarav",
};
function greet(age, sex) {
  console.log(this.name + age + sex);
}
const newuser = greet.myApply(user, 22, "Male");
console.log(newuser);

//? Bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " Cannot be bound as it is not Callable.");
  }

  context.fn = this;
  // we have to return an new function as bind does, we take this new args because user baad me bhi argument pass kar skta hai ok;
  return function (...newArgs) {
    const result = context.fn(...args, ...newArgs);
    delete context.fn;
    return result;
  };
};
const eg = {
  name: "Jonny",
};
function sayHi(gender, age) {
  console.log(this.name + gender + age + " says hi to you.");
}
const newFn = Function.prototype.myBind(eg, "Male...");
const res = newFn("30");

//Polyfill for Promise, Promise.all

//polyfill of flat methods for array
Array.prototype.myFlat = function (depth = 1) {
  const flatten = (arr, d) => {
    if (d === 0) return arr;
    return arr.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(...flatten(item, d - 1));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  };
  return flatten(this, depth);
};

//polyfill for settimeout in js
if (!window.setTimeout) {
  window.setTimeout = function (callback, delay) {
    const start = Date.now();
    while (Date.now() - start < delay) {}
    callback();
  };
}

// usage example;
setTimeout(() => {
  console.log("Hello, world!");
}, 1000); // This will block the thread for 1 second before executing the callback

// == polyfill
// sabsse pahle to hame ye chij smjahni hogi ki == eqaul ko ham kisi ke bhi prototype par add nahi kar sakte hai; to hame iska polyfill basically normally function ki tarah likhna hoga ok;

// ham 4 chijo ko check karte hai == ke liye;
// 1. type of both values
// 2. value of both values
// 3. if both are object then check for reference
// 4. if both are null then return true;


function isEqual(a, b) {
  // check if have ame type
  if (typeof a === typeof b) return a === b;

  //null of undefined check
  if ((a === null && b === undefined) || (a === undefined && b === null)) {
    return true;
  }

  // check if both are objects
  if (typeof a === "object") {
    return isEqual(String(a), b);
  }
  if (typeof b === "object") {
    return isEqual(a, String(b));
  }

  // check for number
  return Number(a) === Number(b);
};

// Example usage
console.log(isEqual(5, "5")); // true
console.log(isEqual(null, undefined)); // true
console.log(isEqual({ a: 1 }, { a: 1 })); // false (different references)
console.log(isEqual([1, 2], "1,2")); // true
console.log(isEqual(5, 5)); // true