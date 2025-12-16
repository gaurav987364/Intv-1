/* eslint-disable @typescript-eslint/no-explicit-any */
const DataShow = ({data}: {data: any[]}) => {
  return (
    <div className=' flex items-center justify-start w-full h-auto bg-gray-300'>
        {data?.map((item:any, index:any) => (
            <p key={index}>{item.id}</p>
        ))}
    </div>
  )
};

export default DataShow;