import { Col, Form, Modal, Container, Row, Button, Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { authFormModal, closeModal } from "../../store/slice/modalSlice"
import loginimg from '../../assets/images/loginSlider3.gif'
import LoginModal from "./LoginModals"
import { getFormObj } from "./signupData"
import { useEffect, useState } from "react"
import axios from "axios"
import { custtypes } from "../../store/slice/usertype"
import SignupUseEffects from "./SignupUseEffects"
import UseEffectsFile from "../Admin/UseEffectsFile"

const SignupModal = ({ formdata, handleChange, handleClick }) => {

  const modalType = useSelector((state) => state.modal.type)
  const show = modalType === 'signup'
  const dispatch = useDispatch()
  const groups = useSelector((state) => state.usertype.grouptype)
  const categories = useSelector((state) => state.usertype.categorytype)
  const filteredCategories = categories.filter(
    (cat) => cat.gid?._id === formdata.businessgroup
  );
  console.log(filteredCategories)
  const countries = useSelector((state) => state.usertype.country)
  const state = useSelector((state)=>state.admin.statesdata)
  const locations = useSelector((state)=>state.usertype.location)
  const formobj = formdata ? getFormObj(formdata, handleChange, groups, countries,state,filteredCategories,locations) : {};
  const [custtype, setcusttype] = useState([])
  const selectedRole = useSelector((state) => state.usertype.selectedRole)
console.log(state,'ss')

  useEffect(() => {
    const fetchUserTypes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/usertype/readUsertypes');
        const types = res.data.data.data;
        dispatch(custtypes(types)); // pass the entire array
        setcusttype(types); // (optional: for local usage)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserTypes()
  }, [])

  return (
    <Modal show={show} size="xl" onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton className="border-0" />
      <Container fluid>
        <Row className=" pb-3">
          <Col lg={6} xs={12} className="">
            <img src={loginimg} alt="" className=" img-fluid object-fit-cover" />
          </Col>

          <Col lg={6} xs={12}>
            <Row>
              <div className="d-flex flex-wrap justify-content-between">
                <Form.Select onClick={handleChange} name='usertype'>
                  <option value="">Select user type</option>
                  {custtype.filter((role)=>role.userrole.toLowerCase()!=='admin').map((item) => (
                    <option key={item._id} value={item._id}>{item.userrole}</option>
                  ))}
                </Form.Select>

              </div>
              {formobj.map((item, index) => {
                const shouldRender = (item.user === 'cust' && selectedRole === 'customer') || (item.user === 'vendor' && selectedRole === 'vendor') || item.user === 'common';

                return shouldRender && (
                  <Col key={index} md={item.md} className="">
                    <Form.Group>
                      {item.type === 'select' ? (<><SignupUseEffects /><UseEffectsFile/>
                        <Form.Label style={{ color: 'var(--color-text-on-secondary)' }}>{item.label}</Form.Label>
                        <Form.Select
                          {...item}
                          className={`border-0 border-bottom rounded-0 mb-4`}
                          style={{
                            backgroundColor: 'transparent',
                            backdropFilter: 'none',
                            borderColor: 'var(--primary-bg)!important',
                          }}>
                            <option value="">{`Select ${item.label}`}</option>
                          {Array.isArray(item.options) && item.options.map((opt, i) => (
                            typeof opt === 'string' ? (
                              <option key={i} value={opt}>{opt}</option>
                            ) : (
                              <option key={i} value={opt.value}>{opt.label}</option>
                            )
                          ))}
                        </Form.Select>
                      </>
                      ) : (
                        <>
                          <Form.Label style={{ color: 'var(--color-text-on-secondary)' }}>{item.label}</Form.Label>
                          <Form.Control
                            {...item}
                            placeholder={`Enter Your ${item.label}`}
                            className={`border-0 border-bottom rounded-0 mb-4 ${item.type}`}
                            style={{ backgroundColor: 'transparent', backdropFilter: 'none', borderColor: 'var(--primary-bg)!important', }} />
                        </>)}
                    </Form.Group>
                  </Col>
                );
              })}
            </Row>

            <div className="fs-6 my-3"> By clicking 'Sign up' I accept the Terms. </div>

            <Button onClick={handleClick} className="w-100 mt-3 border-0 fw-medium" style={{ backgroundColor: 'var(--primary-bg)' }}>Sign Up</Button>

            <div className="text-center mt-2"><Button className="bg-transparent border-0 text-black" onClick={() => dispatch(authFormModal('login'))}> Already have account ? <span style={{ color: 'var(--primary-bg)', fontWeight: '500' }}>Log in</span></Button></div><LoginModal formdata={formdata}
              handleChange={handleChange} />
          </Col>
        </Row>
      </Container>
    </Modal>)
}
export default SignupModal