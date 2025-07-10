import {createSlice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name:'modal',
    initialState:{
        modal:false,
        searchModal:false,
       type:null
    },
    
    reducers:{
        revieMmodalShow:(state)=>{
            state.modal = !state.modal
        },
        searchModal:(state)=>{
            state.searchModal=!state.searchModal
        },
       authFormModal:(state,action)=>{
        state.type = action.payload
       },
       closeModal:(state)=>{
        state.type=null
       }
    }
    
})

export const {revieMmodalShow,searchModal,authFormModal,closeModal} = modalSlice.actions
export default modalSlice.reducer
