import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { categorytypes, countries, grouptypes, locations } from "../../store/slice/usertype"

const SignupUseEffects = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchBusinessGroup = async() =>{
            try{
                const res = await axios.get('http://localhost:5000/businessgroup/allgroup')
                const group = res.data.data.data
                dispatch(grouptypes(group))
            }   
            catch(error){
                console.log(error)
            }
        }
        fetchBusinessGroup()
    },[])
    useEffect(()=>{
        const fetchBusinessCategory = async() =>{
            try{
                const res =await axios.get('http://localhost:5000/businesscategory/allBusinessCategory')
                const category = res.data.data.data
                dispatch(categorytypes(category))
            }
            catch(error){
                console.log(error)
            }
        } 
        fetchBusinessCategory()
    },[])

    useEffect(()=>{
        const fetchCountry = async() =>{
            try{
                const res = await axios.get('http://localhost:5000/country/allcountry')
                const country = res.data.data.data
                dispatch(countries(country))
            }
            catch(error){
                console.log(error)
            }
        }
        fetchCountry()
    },[])

    useEffect(()=>{
        const fetchlocation = async() =>{
            try{
                const res = await axios.get('http://localhost:5000/locations/allLocation')
                const location = res.data.data.data
                dispatch(locations(location))
            }
            catch(error){
                console.log(error)
            }
        }
       fetchlocation()       
    },[])
    return null
}

export default SignupUseEffects