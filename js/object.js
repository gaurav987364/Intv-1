//** All About objects in Js */




const obj = {
    value: 45
};
  
const prototypeObj = {
  getValue: function() {
    return this.value;
  }
};
  
Object.setPrototypeOf(obj, prototypeObj); //?
//Sets the prototype of a specified object o to object proto or null. Returns the object o.
  
console.log(obj.getValue()); // Output: 42
  


//keys in action
const objs = {
  india:{
    Haryana:["faridabad","Rohtak","Hisar"],
  },
  US:{
    California:["San Francisco","Los Angeles","Sacramento"],
  },
};

const states = Object.keys(objs["india"]);
const cities = objs["india"]?.["Haryana"];
console.log(cities);


// Q:Shallow Copy of an Object
// Create a function that makes a shallow copy of an object.

// Q:Check if Object is Empty
// Write a function to determine if a given object has no properties.

// Q:Extract Object Keys
// Write a function that returns all keys from an object as an array.

// Q:Deep Clone an Object
// Build a function that performs a deep clone of an object (without circular references).

// Q:Find Intersection of Two Arrays of Objects
// Given two arrays, return the common elements based on a specified property key.

// Q:Check if an Object is a Plain Object
// Write a function to verify if a given value is a plain object (not an array, function, etc.).

// Q:Deep Merge Two Objects
// Write a function that deeply merges two objects, combining their properties recursively.

// Q:Flatten an Object into a Single-Level Object
// Write a recursive function to flatten a nested object into a single-level object with dot-separated keys.

// Q:Deep Comparison of Two Complex Objects
// Develop a function to perform a deep equality check between two objects, covering nested objects and arrays.

// Q:Detect Cycles in an Object Graph
// Create a function that detects whether there are cycles in a complex, nested object.

// Q:Flatten Nested Object with Dot-Notation Keys and Unflatten
// Write two complementary functions: one to convert a nested object to a flat object with dot-separated keys and one to reverse the process.

// Q:Deep Merge with Conflict Resolution Strategies
// Design a utility that deep merges multiple objects while allowing custom conflict resolution (e.g., overwrite or combine).

// Q:Asynchronous Recursive File Search
// Simulate an asynchronous file search on a mock file system represented via nested objects.

