import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../slices/UserSlice";
import { asyncSlice } from "../slices/AsyncSlice";

const store = configureStore({
    reducer:{
        users:UserSlice.reducer,
        data :asyncSlice.reducer // createAsyncThunk
    },
});


// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;