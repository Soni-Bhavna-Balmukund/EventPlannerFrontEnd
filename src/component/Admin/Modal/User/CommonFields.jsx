import { Form, FloatingLabel, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import UseEffectsFile from '../../UseEffectsFile'
import SignupUseEffects from '../../../Modals/SignupUseEffects'
import CustomerFields from './CustomerFields'
import VendorFields from './VendorFields'

const CommonFields = ({ formdata, handleChange }) => {
    const city = useSelector((state)=>state.admin.citiesdata)
    const state = useSelector((state)=>state.admin.statesdata)
    const country =useSelector((state)=>state.usertype.country)
    const userrole = useSelector((state)=>state.admin.userroles)
    const filteruserrole = userrole.filter((fu)=>fu.userrole !== 'admin')
  return (
      <>
     
        <Col sm={6} className='mb-3'>
          <Form.Group>
            <FloatingLabel label='Email'>
              <Form.Control placeholder='' name='email' value={formdata.email} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group>
            <FloatingLabel label='Password'>
              <Form.Control placeholder='' type='password' name='password' value={formdata.password} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

          <Col sm={6} className='mb-3' >
          <Form.Group>
            <FloatingLabel label='Username'>
              <Form.Control placeholder='' name='username' value={formdata.username} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

         <Col sm={6}>
          <Form.Group>
            <FloatingLabel label='Phone Number'>
              <Form.Control placeholder='' name='phonenumber' value={formdata.phonenumber} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group>
            <FloatingLabel  label="Select Userrole" >
              <Form.Select name='usertype' onChange={handleChange} value={formdata.usertype}>
                <option>Choose role</option>
                {
                  filteruserrole.map((item)=>(
                    <option value={item._id} key={item._id}>{item.userrole}</option>
                  ))
                }
                
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>
         <Col sm={6} className='mb-3'>
          <Form.Group>
            <FloatingLabel  label="Event Location / City" >
              <Form.Select name='locationName' onChange={handleChange} value={formdata.locationName}>
                <option>Choose City</option>
                {
                  city.map((item)=>(
                    <option value={item._id || "--N/A--"}  key={item._id}>{item.locationName}</option>
                  ))
                }
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>

            <Col sm={6} className='mb-3'>
          <Form.Group>
            <FloatingLabel  label="State"  >
              <Form.Select name='sname' onChange={handleChange} value={formdata.sname}>
                <option>Choose State</option>{
                  state.map((item)=>(
                    <option value={item._id || ''} key={item._id}>{item.sname}</option>
                  ))
                }
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>

         <Col sm={6}>
          <Form.Group>
            <FloatingLabel  label="Country" >
              <Form.Select  name='country' onChange={handleChange} value={formdata.country}>
                <option>Choose Country</option>
                {
                  country.map((item) => (
                    <option value={item._id} key={item._id}>{item.countryname}</option>
                  ))
                }
              
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>
      <UseEffectsFile/>
      <SignupUseEffects/>
      
    </>
  )
}
export default CommonFields