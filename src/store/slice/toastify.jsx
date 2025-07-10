import { createSlice} from '@reduxjs/toolkit'

const toastSlice= createSlice({
    name:"toast",
    initialState:{
        message:'',
        type:'',
        id: null // 👈 add this
    },
    reducers:{
        showtoast(state,action){
            state.message=action.payload.message,
            state.type=action.payload.type,
             state.id = Date.now(); // 👈 always unique
        },
        closetoast(state){
            state.message='',
            state.type='',
            state.id = null;
        }
    }
})

export const {showtoast,closetoast} = toastSlice.actions
export default toastSlice.reducer