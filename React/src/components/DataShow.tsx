import React from 'react';

const DataShow = ({data}) => {
  return (
    <div className=' flex items-center justify-start w-full h-auto bg-gray-300'>
        {data?.map((item:any, index) => (
            <p key={item.id}>{item.id}</p>
        ))}
    </div>
  )
}

export default DataShow