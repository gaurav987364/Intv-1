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
Array.prototype.myMap = function(items=[]){
    const results = [];
    for(let i=0; i< this.length; i++){
        results.push(items(this[i], i, this))
    }
    return results;
};

//? Polyfill of call;
//  we need two things as call methods need that, like one is context, argumnets

Function.prototype.myCall = function(context={}, ...args){
    //first check for errors or where my polifil is call
    if(typeof this !== "function"){
        throw new Error(this + " It is not Callable.")
    }

    context.fn = this;
    const result = context.fn(...args);
    delete context.fn; // Clean up
    return result;
};


const person = { name: "Gaurav" };
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

console.log(greet.myCall(person, "Hello", "!")); // Output: "Hello, Gaurav!"



//? apply
Function.prototype.myApply = function(context={}, args=[]){
    if(typeof this !== "function"){
        throw new Error(this + " It is not Callable.")
    }

    //checking for edge case like if user not pass argument in array format
    if(!Array.isArray(args)){
        throw new Error("Please Provide arguments into an Array.")
    }

    context.fn = this;
    const results = context.fn(...args)
    delete context.fn;
    return results
};

const user = {
    name:"Guarav"
}
function greet(age,sex){
    console.log(this.name + age + sex)
}
const newuser = greet.myApply(user, 22, "Male");
console.log(newuser);


//? Bind 
Function.prototype.myBind = function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + " Cannot be bound as it is not Callable.")
    }

    context.fn = this;
    // we have to return an new function as bind does, we take this new args because user baad me bhi argument pass kar skta hai ok;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    };
};