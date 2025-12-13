import React from 'react';

const Child = ({name,age,render}:{name:string,age:number,render:()=>any}) => {
  const happiness = "🤣🤣🤣🤣";
  return (
    <div>
        Child : {name} 
        <p className=' text-red-400 font-semibold text-lg'>{age}</p>
        {render(happiness)}
    </div>
  )
}

export default Child;