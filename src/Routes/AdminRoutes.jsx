import { Route, Routes } from "react-router"
import AdminLayout from "../Layout/AdminLayout"
import AdminDashboard from "../component/Admin/AdminDashboard"
import AddBusinessGroup from "../component/Admin/AddBusinessGroup"
import BusinessCategory from "../component/Admin/BusinessCategory"
import Countries from "../component/Admin/Countries"
import States from "../component/Admin/States"
import Cities from "../component/Admin/Cities"
import Usertypes from "../component/Admin/Usertypes"
import Users from "../component/Admin/Users"
import UserInfo from "../component/Vender/UserInfo"
import EventPlaces from "../component/Admin/EventPlaces"
import Areas from "../component/Admin/Area"

const AdminRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<AdminDashboard/>}/>
                <Route path='group' element={<AddBusinessGroup/>}></Route>
                <Route path='category' element={<BusinessCategory/>}></Route>
                <Route path='countries' element={<Countries/>}></Route>
                <Route path='states' element={<States/>}></Route>
                <Route path='cities' element={<Cities/>}></Route>
                <Route path='areas' element={<Areas/>}></Route>
                <Route path='usertypes' element={<Usertypes/>}></Route>
                <Route path='users' element={<Users/>}></Route>
                <Route path="userinfo" element={<UserInfo/>}/>
                <Route path="eventPlace" element={<EventPlaces/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AdminRoutes