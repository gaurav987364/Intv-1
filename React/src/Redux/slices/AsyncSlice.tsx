import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//! This is called Centralised Api handeling; Production level


export const fetchData = createAsyncThunk("data/fetch",async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
});
const asyncSlice = createSlice({
    name: 'data',
    initialState:{
        data:[],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
              .addCase(fetchData.pending, (state)=>{
                state.loading = true;
              })
              .addCase(fetchData.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = action.payload;
              })
              .addCase(fetchData.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message!;
              })
    }
});

export {asyncSlice};