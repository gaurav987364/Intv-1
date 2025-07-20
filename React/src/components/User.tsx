// import { useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Redux/slices/UserSlice";
import { fetchData } from "../Redux/slices/AsyncSlice";
import { AppDispatch, RootState } from "../Redux/store/store";
import { useEffect } from "react";


export interface Users {
    name: string;
    age: number;
    email: string;
}
const User = () => {
    const dispatch = useDispatch<AppDispatch>(); // best ts practise
    const users = useSelector((state : RootState) => state?.users);
    //? This is asycn-thunk of redux realted file se 
    const {data , error, loading} = useSelector((state : RootState) => state?.data);
    console.log(data);

    //? this is react-hook-form related
    const {register,handleSubmit,formState:{errors},reset} = useForm<Users>();
    
    const onSubmit = (data:Users) => {
        if(!data) return;
        console.log(data)
        //  setUsers([...users, data]);
        dispatch(addUser(data));
        reset();
    };

    const deleteUser = (email:string)=>{
        dispatch(removeUser(email));
    };

   //? Fetch data on component mount (Async dispatch action of redux)
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


  return (
    <div className=" mt-5 border h-fit p-5 rounded">
        <h1 className=" text-center">Users List...</h1>
        <div>
           <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col mt-5 items-center justify-center">
            <input 
                type="text"
                placeholder="Name..." 
                {...register("name",{
                    required:"Name is required.",
                })}
                className=" p-2 rounded-lg bg-gray-500/40 mt-0.5"
            />
            <p className=" text-red-500 text-xs font-semibold">{errors.name && errors.name.message}</p>
            <input 
                type="number"
                placeholder="Age.."
                {...register("age",{
                    required:"Age is required."
                })} 
                className=" p-2 rounded-lg bg-gray-500/40 mt-0.5"
            />
             <p className=" text-red-500 text-xs font-semibold">{errors.age && errors.age.message}</p>
            <input 
                type="text"
                placeholder="xyz@gmail.com" 
                {...register("email",{
                    required:"E-mail is required.",
                    pattern:{
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        message:"Invalid Email Address."
                    }
                })}
                className=" p-2 rounded-lg bg-gray-500/40 mt-0.5"
            />
             <p className=" text-red-500 text-xs font-semibold">{errors.email && errors.email.message}</p>
            <button type="submit" className=" px-2 py-0.5 border w-fit rounded-lg outline-none">Submit</button>
           </form>
        </div>
        <div className=" mt-5 border-t p-2 flex flex-wrap w-full overflow-hidden">
            {users.map((user:Users, index:number) => (
                <div key={index} className=" flex gap-2 flex-wrap w-full overflow-hidden">
                   {user.name}
                   <span className=" cursor-pointer" onClick={()=>deleteUser(user.email)}>❌</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default User