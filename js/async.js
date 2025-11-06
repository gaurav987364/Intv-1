//** All About Asynchronous Js in Js */

postMessage("All About Asynchronous JavaScript");
//working of above postMessage thing;

//setTimeout, setInterval and clearInterval etc...
//Promises all about
//what is callbacks in js
//async/await and question on that in every senarios
//custom promisetracker function
//fetch/axios
//api optimiazations

//custome wait
const wait = (ms) => new Promise(res => setTimeout(res,ms));

// Q:Basic Promise Example
// Write a simple promise that resolves after a 1-second delay.
const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise resolved")
    },1000)
    setTimeout(()=>{
        rej("promise rejected")
    },2000)
});
console.log(promise);

// Q:Async/Await Introduction?
// Implement a simple async function that awaits a promise and returns a value.

// Q:Basic Error Handling in Promises?df
// Show how to catch errors in a promise chain.

// Q:Custom Implementation of Promise.all?
// Implement your own version of Promise.all that resolves when all the promises resolve.

// Q:Chain Promises with Error Handling?
// Write code that chains multiple promises and gracefully handles errors in the chain.

// Q:Asynchronous Pub/Sub System
// Develop a simple publish/subscribe model using objects that can handle asynchronous notifications

// Q:Async API Call Combination
// Write an async function that makes two API calls concurrently and returns a combined result.

// Q:Custom Implementation of Promise.race
// Create your own version of Promise.race that settles with the first promise to resolve or reject.

// Q:Asynchronous Task Queue
// Design an async queue to execute asynchronous tasks sequentially.

// Q:Custom Implementation of Promise.allSettled
// Write a function that mimics the behavior of Promise.allSettled.

// Q:Advanced Pub/Sub Pattern with Unsubscription
// Create a pub/sub system that supports asynchronous notifications and allows subscribers to unsubscribe.

// Q:Custom setTimeout using Promises and async/await
// Implement a version of setTimeout that returns a Promise and can be awaited.

// Q:Concurrency Throttle for Async Operations
// Implement a function to throttle asynchronous operations so that no more than N tasks run concurrently.

// Q:Cancellable Promise Chain
// Write a function or utility that allows you to cancel a chained promise sequence.

// Q:Retry Asynchronous Operations with Exponential Backoff
// Implement a function that retries a failing async operation with exponentially increasing delays between attempts.

// Q:Custom Promise Library
// Build a minimal Promise implementation from scratch that supports chaining, resolve/reject, and error propagation.

// Q:Dependency-Aware Async Task Scheduler
// Build a scheduler that runs asynchronous tasks based on dependency graphs (e.g., tasks represented as nodes in a DAG).

// Q:Asynchronous Recursive File Search
// Simulate an asynchronous file search on a mock file system represented via nested objects.

// Q:Advanced Event Emitter with Asynchronous Listeners
// Implement an event emitter that supports async event listeners and propagates errors appropriately.

// Q:Callback-to-Promise Converter with Auto-Pipelining
// Design a utility that transforms callback-based APIs into promise-based ones, supporting auto-pipelining of operations.

// Q:Framework-Agnostic Drag-and-Drop System
// Develop a drag-and-drop system using asynchronous event handling and promise-based operations, without relying on any external libraries.

// Q:Asynchronous Dependency Injection Container
// Create a dependency injection container that supports asynchronous module initialization and resolution.

// Q:Simulate Concurrency with Async Generators
// Use async generators/iterators to simulate non-blocking concurrent execution in a controlled manner.

// Q:Middleware Pipeline for Async Operations
// Design a middleware system that intercepts and modifies asynchronous operations along a customizable pipeline.

// Q:Asynchronous Task Scheduler with Priority and Dependencies
//  Implement a scheduler that runs asynchronous tasks with priority and dependencies, ensuring that tasks with higher priority are executed first and tasks with dependencies are executed after their dependencies have completed.
