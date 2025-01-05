import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../../components/User";
const initialState : Users[] = [];

// export const apiWaleUsers = createAsyncThunk("apiUsers",async (data,{rejectWithValue})=>{
//     console.log(data);
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     try {
//         const results = await response.json();
//         return results;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        removeUser:(state,action)=>{
            return state.filter((us)=> us.email !== action.payload)
        },
    },
    // extraReducers:{
    //     [apiWaleUsers.pending] : (state)=>{
    //         state.loading = true;
    //     },
    //     [apiWaleUsers.fulfilled] : (state,action)=>{
    //         state.loading =false;
    //         state.users = action.payload
    //     },
    //     [apiWaleUsers.rejected] : (state,action)=>{
    //         state.loading =false;
    //         state.erros = action.payload.message;
    //     }
    // }
});
export {UserSlice};
export const {addUser,removeUser} = UserSlice.actions;