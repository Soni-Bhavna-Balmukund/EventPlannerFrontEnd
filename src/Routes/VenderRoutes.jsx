import { Route, Routes } from "react-router"
import VenderLayout from "../Layout/VenderLayout"
import VenderDashboard from "../component/Vender/VenderDashboard"
import VenderInfo from "../component/Vender/UserInfo"

const AdminRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/vender" element={<VenderLayout/>}>
                <Route index element={<VenderDashboard/>}/>
                <Route path="userinfo" element={<VenderInfo/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AdminRoutes