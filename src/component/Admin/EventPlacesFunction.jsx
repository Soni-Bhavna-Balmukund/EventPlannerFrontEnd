import { useState } from "react"
import { useDispatch } from "react-redux"
import axios from 'axios'
import showtoast from '../../store/slice/toastify'
import CreatePlace from "./Modal/EventPlaces/CreatePlace"
import { useSelector } from "react-redux"
import { setEventPlace } from "../../store/slice/AdminSlice"
import ViewPlaceInfo from "./Modal/EventPlaces/ViewPlaceInfo"

const EventPlacesFunction = () => {

  const {adminModalType,adminModalData,modelopen} = useSelector((state)=>state.admin)
  
  const initialState ={
    title :'',
    price:'',
    business_category:'',
    business_group:'',
    rating:'',
    price_per_plate:'',
    guest_limit:'',
    discount:0,
    longDiscription:'',
    shortDiscription:'',
    address1:'',
    address2:'',
    pincode:'',
    landmark:'',
    area:'',
    city:'',
    state:'',
    country:'',
    phonenumber:'',
    status:'',
    room_price:'',
    total_rooms:'',
    food_category:''
  }

  // const [show,setShow] =useState(false)
  const [imgPrev,setImgPrev] = useState([])
  const [selectedFile,setSelectedFile] = useState([])
  const [formdata,setFormData] = useState(initialState)
  const dispatch = useDispatch()

  const handleImageChange = (e) =>{
    const files = e.target.files
    const fileArray = Array.from(files)

    const imgPreview = fileArray.map(file => {
      const reader = new FileReader()
      return new Promise((resolve)=>{
        reader.onload = () =>{
          resolve({
            src: reader.result,
            name: file.name
          })
        }
        reader.readAsDataURL(file)
      })
    })
    Promise.all(imgPreview).then(image =>{
      setImgPrev(image)
      setSelectedFile(fileArray)
    })
  }

  const addPlace = async() =>{
    try{
      const allFormData = new FormData()
      allFormData.append('folder','EventPlaceImg')

      selectedFile.forEach(file =>{
        allFormData.append('image',file)
      })

      for(let key in formdata)
      {  
        const value = formdata[key]?._id || formdata[key];
        allFormData.append(key,value)
      }

      const config = {
        headers:{
          'Content-Type': "multipart/form-data"
        }
      }

      const res = await axios.post('http://localhost:5000/addPlace/addPlace',allFormData,config)
      console.log(res,'res')

      if(res.data.data.status){
        console.log('pass')
        dispatch(showtoast({message:res.data.data.message,type:'success'}))
      }

      const updatedList = await axios.get("http://localhost:5000/addPlace/allPlace");
            dispatch(setEventPlace(updatedList.data.data.data));
      setFormData(initialState);
      setImgPrev([]);
      setSelectedFile([]);
    }catch(error){
        // dispatch(showtoast({message:error.responce.data.message,type:'error'}))
        console.log(error,error.response.data.data.message,'fail')
    }
  }

  return (
    <>
    {
       adminModalType === 'addEventPlace' &&  <CreatePlace data={adminModalData} modelopen={modelopen}  formdata={formdata} handleImageChange={handleImageChange} setFormData={setFormData} addPlace={addPlace} imgPrev={imgPrev}/> 
      }
      {adminModalType === 'viewPlaceModel' && <ViewPlaceInfo data={adminModalData} modelopen={modelopen}/>}
   </>
  )
}

export default EventPlacesFunction