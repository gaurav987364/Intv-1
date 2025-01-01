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
  