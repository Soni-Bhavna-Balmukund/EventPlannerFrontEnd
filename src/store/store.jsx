import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './slice/modalSlice'
import toastReducer from './slice/toastify'
import usertypeReducer from './slice/usertype'
import adminReducer from './slice/AdminSlice'
import authReducer from './slice/auhSclice'


const store = configureStore({
    reducer: {
        modal: modalReducer,
        toast: toastReducer,
        usertype: usertypeReducer,
        admin: adminReducer,
        auth: authReducer,
    }
})

export default store