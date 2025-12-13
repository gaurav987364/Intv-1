import React from 'react';

const Child = ({name,age,render}:{name:string,age:number,render:()=>any}) => {
  const happiness = "🤣🤣🤣🤣";
  return (
    <div>
        Child : {name} 
        <p>{age}</p>
        {render(happiness)}
    </div>
  )
}

export default Child;