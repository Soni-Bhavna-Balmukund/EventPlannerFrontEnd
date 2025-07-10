import { Button ,Container,Row,Col, Form} from "react-bootstrap"
import {useDispatch,useSelector} from 'react-redux'
import { setSidebar } from "../../store/slice/AdminSlice"
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../../assets/images/logo4(4).png'
import { FaSearch } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import userprofile from '../../assets/images/userimg5.png'
import {Link} from 'react-router-dom'

const VenderHeader = () =>{
     const dispatch = useDispatch()
      
        return(
            <>
            <Container fluid className=" px-0 secondary-bg position-sticky top-0 boxShadow z-1" >
                <div className="d-md-block d-none">
                <Row className="align-items-center py-2 px-2 m-0 ">
                    <Col className='col-auto fs-3'>
                    <FaBarsStaggered onClick={()=>dispatch(setSidebar())}   className="d-md-block d-none " style={{color:'var( --color-text-on-secondary)'}}/>
                {/* <FaBarsStaggered onClick={()=>dispatch(setSidebar())}  className='d-lg-none d-block fs-3'  style={{color:'var( --color-text-on-secondary)'}}/> */}
                    </Col>
    
                    <Col className="col-md-2"><img src={logo} alt="" className="img-fluid w-100"/></Col>
    
                    <Col sm={3} className="position-relative">
                    <Form.Control placeholder="Search" /><FaSearch className="position-absolute" style={{right:'30px','bottom':'50%',transform:'translateY(50%)',color:'var(--color-text-on-secondary)'}}/>
                    </Col>
                    <Col className="headicon justify-content-end d-flex align-items-center">
                    <IoMailOutline />
                    {/* <BsFullscreenExit /> */}
                    <BsFullscreen />
                    {/* <MdDarkMode /> */}
                    <MdOutlineDarkMode />
                    <FaRegBell />
                    <CiSettings className="settingicon"/>
                    <Link to='userinfo'><img src={userprofile} alt="" width={40} className="img-fluid rounded-circle "/></Link>
                    
                    </Col>
                </Row></div> 
            <div >
            <div className="d-md-none d-block ">
            <Row className="m-0 align-items-center pb-2 ">
                <Col xs={12} className="text-center pb-2 pt-1"><img src={logo} alt="" height={50} /></Col>
                <Col className="col-1">
                <FaBarsStaggered onClick={()=>dispatch(setSidebar())}  className='d-md-none d-block fs-3'  style={{color:'var( --color-text-on-secondary)'}}/></Col>
                <Col xs={5}>
                    <Form.Control placeholder="Search" /><FaSearch className="position-absolute" style={{right:'30px','bottom':'50%',transform:'translateY(50%)',color:'var(--color-text-on-secondary)'}}/></Col>
    
                <Col xs={6} className="headicon justify-content-end d-flex align-items-center">
                    <IoMailOutline />              
                    {/* <MdDarkMode /> */}
                    <MdOutlineDarkMode />
                    <FaRegBell />
                    <CiSettings className="settingicon"/>
                    <img src={userprofile} alt="" width={40} className="img-fluid rounded-circle "/>
                    </Col>
            </Row></div>
                
                {/* </Row>
            <div > */}
    
           </div></Container>
            </>
        )
}
export default VenderHeader