import { Form, FloatingLabel, Row, Col } from 'react-bootstrap'


const CustomerFields = ({ formdata, handleChange }) => {
  
  return (
  <>
  
        <Col sm={6} className='mb-3'>
          <Form.Group>
            <FloatingLabel label='First Name'>
              <Form.Control placeholder='' name='firstname' value={formdata.firstname} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group>
            <FloatingLabel label='Last Name'>
              <Form.Control placeholder='' name='lastname' value={formdata.lastname} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

         <Col sm={6} className='mb-3'>
          <Form.Group>
            <FloatingLabel label='Middle Name'>
              <Form.Control placeholder='' name='middlename' value={formdata.middlename} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

         <Col sm={6}>
          <Form.Group>
            <FloatingLabel label='Event Data'>
              <Form.Control placeholder='' type='date' name='eventdate' value={formdata.eventdate} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

       
  </>
  )
}

export default CustomerFields