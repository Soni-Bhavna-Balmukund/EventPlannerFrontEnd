import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { authState, authUser } from "../slice/auhSclice"

const AuthProvider = ({children}) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        const getverify =async()=>{
            try{
                const token = localStorage.getItem('token')
                if(!token){
                    return 'token null'
                }

                const config ={
                    headers:{
                        authorization:`${token}`
                    }
                }

                const res = await axios.post('http://localhost:5000/users/authverify',{},config)

                if(res.data.status){
                    // dispatch(authState(res.data.data.data))
                    dispatch(authState())
                    dispatch(authUser(res.data.data.data))
                }else{
                    localStorage.removeItem('token')
                }
                console.log(res,res.data.status,'pro')
            }
            catch(error){
                console.log(error)
            }
        }
        getverify()
    },[dispatch])
    return(
        <>
        {children}
        </>
    )
}
export default AuthProvider