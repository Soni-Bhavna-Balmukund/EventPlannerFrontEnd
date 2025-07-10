import { Offcanvas, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from "../../store/slice/AdminSlice"
import { Link } from "react-router"
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { PiCityBold } from "react-icons/pi";
import { PiUserListBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineAim } from "react-icons/ai";

const AdminSidebar = () => {
    const show = useSelector((state) => state.admin.sidebar)
    const dispatch = useDispatch()
    console.log(show)
    return (
        <>
            <Offcanvas show={show} onHide={() => dispatch(setSidebar())} responsive="md" className='w-255px'>
                <Offcanvas.Header closeButton style={{ backgroundColor: 'var(--secondary-bg)' }}>nffe</Offcanvas.Header>

                <Offcanvas.Body className="d-flex flex-column align-items-start py-4 gap-3 offcan" style={{ backgroundColor: 'var(--secondary-bg)' }}>

                    <div className='d-flex'><MdOutlineAddBusiness className="fs-4 me-2" /> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='group' >Business Groups</Link></Button></div>

                    <div className='d-flex'><TbCategoryPlus className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='category'>Business Categories </Link></Button></div>

                    <div className='d-flex'><PiCityBold  className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='areas'>Areas </Link></Button></div>

                    <div className='d-flex'><PiCityBold  className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='cities'>Cities </Link></Button></div>

                    <div className='d-flex'><AiOutlineAim className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='states'>States </Link></Button></div>

                   <div className='d-flex'><BiWorld className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='countries'>Countries </Link></Button></div>

                    <div className='d-flex'><FaUserTie className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='usertypes'>Usertypes </Link></Button></div>

                    <div className='d-flex'><PiUserListBold className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='users'>Users </Link></Button></div>

                    <div className='d-flex'><PiUserListBold className="fs-4 me-2"/> <Button className="p-0 bg-transparent border-0 textSecondary fw-medium text-start" ><Link to='eventPlace'>Event Places </Link></Button></div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default AdminSidebar