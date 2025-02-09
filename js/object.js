const obj = {
    value: 42
  };
  
  const prototypeObj = {
    getValue: function() {
      return this.value;
    }
  };
  
Object.setPrototypeOf(obj, prototypeObj); //?
  
console.log(obj.getValue()); // Output: 42
  


//keys in action

const objs = {
  india:{
    Haryana:["faridabad","Rohtak","Hisar"],
  },
  US:{
    California:["San Francisco","Los Angeles","Sacramento"],
  }
};

const states = Object.keys(objs["india"]);
const cities = objs["india"]?.["Haryana"];
console.log(cities);