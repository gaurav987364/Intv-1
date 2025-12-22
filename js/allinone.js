// var a = 1;
// console.log(a++);
// console.log(a);

// var b = 1;
// console.log(++b);
// console.log(b);

// let c =1
// console.log(c++);
// console.log(c);

// hoisting is js hoisting is the mechanism in js in which the variable and fun declarations are hoisted to top of thier scope function declarations are hoisted function expressions are never hoisted;;
console.log(a); /// undefined
var a;
a=1;

console.log(abc()); // its give us hello
function abc(){
    console.log("Hello...");
}

console.log(abc() + "ok"); //its give us undefined

// console.log(xyz()); // xyz is not function

// var xyz; // this is hoisted means function expression is never hoisted
// var xyz = function(){
//     console.log("I am a fu");
// }

{
    console.log(z,"Hoisted"); // undefined
    var z = 10;
};

//diff bw var let const in hoisting var is hoisted and move to to top of there scope and initialize with undefined, let is also hoisted but it never initialie with undef. const is never hoisted and initialize

//const wait = (ms)=> new Promise(res => setTimeout(res,ms));
// console.log(f(),"1");
// async function f(){
//     wait(3000);
//     await console.log("I");
// }
// console.log(f(),"2")


l=2;
console.log(l); // l is refer to the window object;

console.log({} == {}); // false
console.log([""]==[""]) // false
console.log("" == "") // true (false == false)
console.log("[]" == []) //false
console.log(typeof "") //string
console.log("true" == true); // due to type coercion tries to convert it into boolean or ye hoga nahi to it return false 
console.log("2" == 2); // type coercion performs so true;
console.log(typeof typeof 100) // string
console.log(typeof typeof typeof {a:1}) // string
console.log(typeof [123]) // gives object becoz in js everything is obj.

console.log(Array.from(4)); // alag alag value
console.log(Array.of(123)) // [123] as whole 



// js event loop (works on LIFO principal);
// step-1 Global execution context (code aya excute ke liye)
// step-2 memory creaion pahse ( code ke variable etc ki copy banti hai memory me excute ahi hoti)
//step-3 execution pahse jisme ek box create hota hai usme hote hai new Env. variable + thread jo creation pahse or execution pahse ko dubara execute krte hai or execution pahse se result returnhokar sedha global object this pe jata hai and cycle is repeated

// it is the single threaded model that handel asyncchronous tasks. it handel these tasks by having a queue of task and call stack.

// Call stack;
// web Api ;
// task queue;
// Event loop;

// scopes in js (function, global, blocked )
//? lexical scope is js is used for resolve the variables names when the function is created in another function;

// closures
//? it is related to lexical scope; a inner function has ability to use the values from the outer function;

// function outer(){
//     let name = "gauarv";
//     function inner(){
//         console.log(name);
//         return this.name;
//     }
//     return inner();
// }
// console.log(outer())

//Type Coercion is the process of converting values from one data type to anomter data type(like strings to numbers); This happen when a function recieve another data type from what is excepting;
console.log(1 + "2"); // "12" (number 1 is coerced to a string)
console.log("5" - 3); // 2 (string "5" is coerced to a number)

//*Explicit coercion means convert values by ourselves like Number("123"), String(123); etc..


// currying
//? a function takes an argument and return another funtion by taking another argument and so on...
function curried(a){
    return function innerCurried(b){
        return function nestedInnerCurried(c){
            return a + b + c;
        }
    }
}
console.log(curried(5)(10)(10)); // 25


// callback ()=>{};
function fetchData(callback) {
    setTimeout(() => {
      const data = { user: 'John Doe', age: 30 };
      callback(data);
    }, 2000);
  }
  
  function displayData(data) {
    console.log('Data:', data);
  }
  
  fetchData(displayData);
  // Output after 2 seconds:
  // Data: { user: 'John Doe', age: 30 }
  
  //? Callback hell
  function step1(callback) {
    setTimeout(() => {
      console.log('Step 1 complete');
      callback();
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(() => {
      console.log('Step 2 complete');
      callback();
    }, 1000);
  }
  
  function step3(callback) {
    setTimeout(() => {
      console.log('Step 3 complete');
      callback();
    }, 1000);
  }
  
  step1(() => {
    step2(() => {
      step3(() => {
        console.log('All steps complete');
      });
    });
  });

  




// promise
const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Success");
    },2000);
    //rej("Error")
});
const res = promise.then((res)=>{
    return console.log(res);
}).catch((err)=>{
    return console.log(err);
}).finally(()=>{
    console.log("operation completed");
});

//? promise methods
const wait = (ms)=>new Promise(res => setTimeout(res,ms));
const promise1 = new Promise((res,rej)=> {
    console.log(res);
    res("Success-1");
});
const promise2 = new Promise((res,rej)=> {
    console.log(res);
    res("Success-2");
});
const promise3 = new Promise((res,rej)=> {
    console.log(res);
    res("Success-3");
});

//! it wait for all the operation to complete and then retur result
const result = Promise.all([promise1,promise2,promise3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
console.log(result);

//! race method only check for one promise for resolve or reject if any of resolve first it returns it only;
const result2 = Promise.race([promise1,promise2,promise3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
console.log(result2);

//! Promise.allSettled(): Waits for all promises to either resolve or reject. and return the status of the promises in results;
const res3 = Promise.allSettled([]);




// event propagation:->
// it has two thigns one is :Event delegation: & Event Bubbling and capturing;
//? by default there is event capturing phase:

// async await:->


//? Prototype is the object from which other objects are inherit properties;
// polyfills.
// it is piece of code provide the morder functionality to the older browsers that nativly don't support them; polyfils of array and strings are;

Array.prototype.myMap = function (items){
    let result = [];
    for(leti=0;i<this.length;i++){
        result.push(items(this[i],i,this));
    }
    return result;
};

Array.prototype.myFilter = function (callback){
    let filterValues = [];

    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            filterValues.push(this[i]);
        }
    }
    return filterValues;
};

Array.prototype.myReduce = function (callback,ival){
    if(this.length && ival === undefined){
        throw new TypeError("Provide an initial value.")
    }
    let accum = ival !== undefined ? ival : this[0];
    let startIndex = ival !== undefined ? 0:1;

    for(let i=startIndex;i<this.length;i++){
        accum = callback(accum, this[i],i,this);
    }
    return accum;
};

// strings polyfils;
// includes();

String.prototype.myIncludes = function(search, fromIndex = 0) {
    return this.indexOf(search, fromIndex)!== -1;
};

console.log("Gaurav sharma".myIncludes("h")); // true
console.log("Gaurav sharma".includes("h")); // true


// Nested Array and flattning
const nestedArray = [1,2,3,["a","b"],[[4],[5],[[6],7,[8,[9]]],10]];
console.log(nestedArray.flat(5));

// nested destructuring
const nestedObj = {
    a: [1,2,3],
    b: {
        c: [4,5,6],
        d: {
            e: [7,8,9]
        }
    }
};

const items = nestedObj;
console.log({...items});


// senario based question about forms;

//Q: suppose we have one form like this and in form we have one button we have to guess what happend when user press submit button and what happen when we change the type of button from submit to another ? 

{/* 
    //? ans => in first case the form is submitted due to default behaviour of button when it is type submit, and the user input is store in the url:
    <form>
        <input type="text" name="username">
        <input type="password" name="password">
        <button type="submit">Submit</button>
    </form>

    //? no it is not submitted now due to type change in button,
    <form>
        <input type="text" name="username">
        <input type="password" name="password">
        <button type="button">Save</button>
    </form> 
*/
}


//T type;
// interface Props<T>{
//     array: T[]
// };
// <T extends Element>({}:Props<T>)

// Interface Props<T>{
//  name:string;
//  age:number;
//  sex:string;
// }

// const MyCard:React.Fc = <T extends Props<T>>({...all props:T})=>{}



// Proxy in js:-
// A Proxy is an object that wraps another object and intercepts operations performed on it—like reading, writing, or function calls. It lets you customize behavior for fundamental operations.

const user = {
  name: "Gaurav",
  age: 23
};

const handler = {
  get(target, prop) {
    console.log(`Accessing ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
    return true;
  }
};

const proxyUser = new Proxy(user, handler);

// Accessing properties
console.log(proxyUser.name); // Logs: Accessing name → Gaurav

// Setting properties
proxyUser.age = 25;          // Logs: Setting age to 25

// Invalid set
proxyUser.age = "twenty";    // Throws: TypeError



//! web components:-
// ye sab bade bade tech giants use krte hai ye kuch componentes hai jo alag alag chijo me use hote hai, har frameowork, library and html k sath ham inhe use kar skte hai ok

// Custom elements are a powerful feature of web components that allow you to create new HTML elements with custom behavior. 
// They are defined using the customElements.define() method, which takes two arguments: the name of the custom element and a constructor function that defines its behavior.


//Rule no.1 when we make our custom tag or web components ham usme name define sirf - se kr skte hai kyuki browser diiferenciate krega inbuild bina - ke bane hote hai ok
//Rule no.2 we can not use any html tag name or any build in tag name;

// Tip:-? ham class ke anadar sirf constructor me hee console kar skte hai ok

// Eg:-> Making a simple web component of button 
class MyButton extends HTMLElement{
    constructor(){
        super();
        console.log("My button is created",this);
        this.innerHTML = `
        <span>Click me</span>
        `
    }

    // add on click
    handleClick = ()=>{
      alert("Hey this is my button click event...");
    };

    // on mounting in class just like react but
    connectedCallback(){
      this.querySelector('button').addEventListener("click", this.handleClick);
    }

    //did component mount (agar haa unmount hua to clean up event phase)
    disconnectedCallback(){
      this.querySelector('button').removeEventListener("click", this.handleClick);
    }

}

// add tag to html or browser
customElements.define("my-button", MyButton);



// Counter web component:-

//template (tag)
const template = document.createElement("template");
template.innerHTML = `
  <div>
    <button id="decrement">-</button>
    <span>Count: <span id="count">0</span></span>
    <button id="increment">+</button>
  </div>
`
class Counter extends HTMLElement {
  constructor(){
    super();

    this.count = 0;

    // adding attributes functionality also
    this.min = 0;
    this.max = 10000000000;
    this.step = 1;

    //add template to shadow dom ok not directly
    const shadowRoot = this.attachShadow({mode:"open"});
    shadowRoot.appendChild(template.content.cloneNode(true)); // doing append child because template is object not a string
  };


  handleIncrease = ()=>{
    const count = this.shadowRoot.getElementById("count");
    // count.textContent = Number(count.textContent) + 1;
    if(Number(count.textContent) + this.step >= this.max){
      return;
    }
    count.textContent = Number(count.textContent) + this.step;
    this.updateUi();
  };

  handleDecrease = ()=>{
    const count = this.shadowRoot.getElementById("count");
    // count.textContent = Number(count.textContent) - 1;
    if(Number(count.textContent) - this.step <= this.min){
      return;
    }

    count.textContent = Number(count.textContent) - this.step;
    this.updateUi();
  };

  // update Ui
  updateUi = ()=>{
    this.shadowRoot.getElementById("count").textContent = this.getAttribute("count");
    console.log(this.getAttribute("count"));
  };
  // on mounting in class just like react but
  connectedCallback(){
    const minStr = this.getAttribute('min');
    const maxStr = this.getAttribute('max');
    const stepStr = this.getAttribute('step');

    if(minStr){
      this.min = Number(minStr);
    }
    if(maxStr){
      this.max = Number(maxStr);
    }
    if(stepStr){
      this.step = Number(stepStr);
    }

    this.shadowRoot.getElementById("increment").addEventListener("click", this.handleIncrease);
    this.shadowRoot.getElementById("decrement").addEventListener("click", this.handleDecrease);
  };

  //did component mount (agar haa unmount hua to clean up event phase)
  disconnectedCallback(){
    this.shadowRoot.getElementById("increment").removeEventListener("click", this.handleIncrease);
    this.shadowRoot.getElementById("decrement").removeEventListener("click", this.handleDecrease);
  };

  // attribute change
  attributeChangedCallback(name, oldValue, newValue){
    console.log(name, oldValue, newValue);
  };

}

customElements.define('my-counter', Counter);



