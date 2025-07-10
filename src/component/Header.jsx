import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdOutlineRateReview } from "react-icons/md";
import { RiMobileDownloadLine } from "react-icons/ri";
import logo from '../assets/images/logo4(4).png'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { authFormModal, revieMmodalShow, searchModal } from '../store/slice/modalSlice';
import ReviewModal from './Modals/ReviewModal';
import SearchModal from './Modals/SearchModal';
import { FaBarsStaggered } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Signup from './Modals/signup';
import LoginModals from './Modals/LoginModals';
import { clearAuth } from '../store/slice/auhSclice';
import SignupUseEffects from './Modals/SignupUseEffects';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const modalType = useSelector((state) => state.modal.type)
    const auth = useSelector((state) => state.auth.auth)
    const location = useSelector((state) => state.usertype.location)
    console.log(location)
    // console.log(auth,'auth')
    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(clearAuth())
    }

    return (
        <>
            <Container fluid>
                <div className="d-lg-block d-none">
                    <Row className='py-1 align-items-center primary-bg text-white fs-14 px-4' >
                        <Col md={3}>India's Favourite Event Planning Platform</Col>
                        <Col md={2}> <Form.Select name="city" id="" className='py-1 bg-white rounded-1 fw-medium' style={{ color: 'var(--primary-bg)' }} >
                            <option value="city" >All Cities</option>
                            <>
                                {
                                    location.map((item, index) => (
                                        <option value={item._id}>{item.locationName}</option>
                                    ))
                                }
                                <SignupUseEffects />
                            </>
                        </Form.Select></Col>
                        <Col md={7} className='text-end fw-medium'><Button className='bg-transparent border-0' onClick={() => dispatch(revieMmodalShow())}><MdOutlineRateReview className='fs-4' /> Write a Review </Button>
                            <ReviewModal />
                            <span className='ms-4'><RiMobileDownloadLine className='fs-4' /> <Link target='_blank' to='https://play.google.com/store/search?q=event%20planner&c=apps&hl=en_IN' className='fs-6 text-decoration-none text-white'> Download app</Link></span> </Col>
                    </Row>

                    <Row className='secondary-bg px-4 text-white align-items-center'>
                        <Col md={2}><Link to='/'><img src={logo} alt="" className='img-fluid w-100' /></Link></Col>
                        <Col md={6} className='d-flex justify-content-around px-4 fs-5 menu ' style={{ fontFamily: 'var(--secondary-font)' }}>

                            <Link to='/venues' className='d-block text-decoration-none py-2 fw-medium' style={{ 'color': 'var(--color-text-on-secondary)' }}>Venues</Link>
                            {/* <Button  className='d-block bg-transparent border-0  py-2 px-0 fw-medium' onClick={()=>navigate('/venues')} style={{ 'color': 'var(--color-text-on-secondary)' }}>Venues</Button> */}
                            <Link to='venders' className='d-block text-decoration-none py-2 fw-medium' style={{ 'color': 'var(--color-text-on-secondary)' }}>Venders</Link>
                            <Link to='photos' className='d-block text-decoration-none py-2 fw-medium' style={{ 'color': 'var(--color-text-on-secondary)' }}>Photos</Link>
                            <Link to='realWeddings' className='d-block text-decoration-none py-2 fw-medium' style={{ 'color': 'var(--color-text-on-secondary)' }}>Real Weddings</Link>
                            <Link to='blogs' className='d-block text-decoration-none py-2 fw-medium' style={{ 'color': 'var(--color-text-on-secondary)' }}>Blogs</Link>
                            <Link to='e_invites' className='d-block text-decoration-none py-2 fw-medium' style={{ 'color': 'var(--color-text-on-secondary)' }}>E-invites</Link>
                        </Col>
                        <Col md={4} className='text-end'>
                            <Button className='bg-transparent border-0' onClick={() => dispatch(searchModal())}><span className='me-4  fs-5 p-2 pt-1  rounded-circle search-btn' style={{ background: 'var(--accent-bg-color)' }}> <IoSearch /></span></Button><SearchModal />
                            {
                                auth ? (<Button onClick={handleLogout}>Logout</Button>) : (<>
                                    <Button className='bg-transparent border-0 ' onClick={() => dispatch(authFormModal('login'))} >
                                        <span className=' py-2 px-4 rounded-pill login-btn' style={{ background: 'var(--accent-bg-color)' }}>Login/Sign Up</span></Button>
                                    {modalType === 'login' && <Signup />}
                                    {modalType === 'signup' && <Signup />}
                                </>)
                            }

                        </Col>
                    </Row></div>

                <div className='d-lg-none d-block'>
                    <Row className='secondary-bg text-white py-2 align-items-center '>
                        <Col sm={1} xs={2}><FaBarsStaggered className='fs-4' style={{ color: 'var(--color-text-on-secondary)' }} /></Col>
                        <Col sm={5} xs={4} className=''><Link to='/'><img src={logo} alt="" className=' img-fluid' style={{ 'maxWidth': '150px', 'minWidth': '130px', 'width': '100%' }} /></Link></Col>
                        <Col sm={5} xs={4} className='d-flex justify-content-end '>
                            <span>
                                <Form.Select name="city" id="" className='py-1 bg-white rounded-1 w-100 border-0 bg-transparent ' style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <option value="city">All Cities</option>
                                    <>
                                        {
                                            location.map((item, index) => (
                                                <option value={item._id}>{item.locationName}</option>
                                            ))
                                        }
                                        <SignupUseEffects />
                                    </></Form.Select>
                            </span>
                        </Col>
                        <Col sm={1} xs={2}> <Button onClick={() => dispatch(revieMmodalShow())} className='bg-transparent border-0 p-0'> <span className='primary-bg p-2 pt-1 rounded-end rounded-4'><MdAppRegistration className='fs-3' /></span></Button></Col>
                    </Row></div>
            </Container>
        </>
    )
}
export default Header