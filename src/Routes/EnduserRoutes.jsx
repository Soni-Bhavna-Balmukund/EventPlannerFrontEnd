import { Route, Routes } from "react-router"
import Home from "../component/Home"
import EnduserLayout from "../Layout/EnduserLayout"
import Venues from "../component/Venues"
import Venders from "../component/Venders"
import Photos from "../component/Photos"
import Blogs from "../component/Blogs"
import E_invites from "../component/E_invites"
import RealWeddings from "../component/RealWeddings"
import DetailedPlacePage from "../component/DetailedPlacePage"

const EnduserRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<EnduserLayout/>}>
                <Route index  element={<Home/>}/>
                <Route path="/venues" element={<Venues/>}/>
                <Route path="venders" element={<Venders/>}/>
                <Route path="photos" element={<Photos/>}/>
                <Route path="blogs" element={<Blogs/>}/>
                <Route path="e_invites" element={<E_invites/>}/>
                <Route path="realWeddings" element={<RealWeddings/>}/>
                <Route path="/detailedPlacePage/:id" element={<DetailedPlacePage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default EnduserRoutes