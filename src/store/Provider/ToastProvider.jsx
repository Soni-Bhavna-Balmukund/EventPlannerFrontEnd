import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { closetoast } from '../slice/toastify'

import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider = ({children}) =>{
    const dispatch = useDispatch()
    const toastState = useSelector((state)=>state.toast)    

    useEffect(()=>{
        if(toastState.message && toastState.type){
            toast[toastState.type](toastState.message,{
                position:"top-center",
                autoClose:1500,
                progress:undefined,
                hideProgressBar:false,
                closeOnclick:true,
                pauseOnHover:true,
                draggable:true,
                theme:'dark',
                onclose:()=>{
                    dispatch(closetoast())
                }
            })
        }
    // },[toastState,dispatch])
    },[toastState.id]) // 👈 now re-triggers even if message/type are same
    return(
        <>
        {children}
        <ToastContainer/>
        </>
    )
}
export default ToastProvider