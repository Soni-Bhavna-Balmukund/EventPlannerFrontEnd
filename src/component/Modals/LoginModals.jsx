import { getFormObj, getLoginObj } from "./signupData"
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { authFormModal, closeModal } from "../../store/slice/modalSlice"
import logingif from '../../assets/images/logingif2.gif'
import { useEffect } from "react"

const LoginModals = ({logindata,handleLoginChange,handleLoginClick}) => {
    
    // const formobj = formdata ? getFormObj(formdata, handleChange) : [];
    const formobj = logindata?getLoginObj(logindata,handleLoginChange):[]
    const dispatch = useDispatch()

    const modalType = useSelector((state) => state.modal.type)
    const show = modalType === 'login'

    // const handleClick = () => {
    //     console.log(formdata)
    // }
//     useEffect(() => {
//   console.log('Form data updated:', formdata);
// }, [formdata]);

    // console.log(formobj,formdata,handleChange,getFormObj,"formobj","formdata","handleChange","getFormObj")
    // const filterFields = formobj.filter(item => item.name === 'email' || item.name === 'password')
    // console.log(filterFields)
    // console.log(show,'login')
    return (
        <>
            <Modal show={show} size="lg" onHide={() => dispatch(closeModal())}>
                <Modal.Body>
                    <Container fluid>
                        <Container>
                            <Row className="py-4">
                                <Col lg={5} xs={12} className="text-lg-start text-center mb-lg-0 mb-3">
                                    <img src={logingif} alt="" className="img-fluid  " style={{ width: '70%' }} />
                                </Col>
                                <Col lg={7} xs={12} className="d-flex flex-column justify-content-center">
                                     {
                                      formobj.map((item,index)=>(
                                            // (item.name === 'email' || item.name === 'password')&& (

                                                <Col key={index}>
                                                <Form.Group >
                                                <Form.Label style={{ color: 'var(--color-text-on-secondary)' }}>{item.label}</Form.Label>
                                                <Form.Control name={item.name} value={item.value} onChange={item.onChange} type={item.type} className={`border-0 border-bottom rounded-0 mb-4`}
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        backdropFilter: 'none',
                                                        borderColor: 'var(--primary-bg)!important',
                                                    }} />
                                            </Form.Group>
                                            </Col>
                                        )
                                    // )
                                    // }
                                )}
                                   
                                    {/* <Form.Group>
                                        <Form.Label style={{ color: 'var(--color-text-on-secondary)' }}>Password</Form.Label>
                                        <Form.Control name='password' type="password" className={`border-0 border-bottom rounded-0 mb-4`}
                                            style={{
                                                backgroundColor: 'transparent',
                                                backdropFilter: 'none',
                                                borderColor: 'var(--primary-bg)!important',
                                            }} />
                                    </Form.Group> */}

                                    <div>Forgrt your username or password?</div>

                                    <Button className="w-100  border-0 fw-medium my-4" onClick={handleLoginClick} style={{ backgroundColor: 'var(--primary-bg)' }}>Login</Button>

                                    <div className="d-flex align-items-center justify-content-center ">
                                        Not Have account Signup? <Button className="bg-transparent border-0 fw-medium py-0" style={{ color: 'var(--color-text-on-secondary)' }} onClick={() => dispatch(authFormModal('signup'))}>Signup</Button>
                                    </div>


                                </Col>
                            </Row>
                        </Container>
                    </Container>


                </Modal.Body>
            </Modal>
        </>
    )
}
export default LoginModals