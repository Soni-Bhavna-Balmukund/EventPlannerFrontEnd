import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        auth:false,
        user:{}
    },
    reducers:{
        authState:(state)=>{
            state.auth=!state.auth
            console.log(state.auth,'slice')
        },
        authUser:(state,action)=>{
            state.user=action.payload
            console.log(state.user,'auth')
        },
        clearAuth:(state)=>{
            state.auth = false,
            state.user={}
        }
    }
})

export const {authState,authUser,clearAuth} = authSlice.actions
export default authSlice.reducer