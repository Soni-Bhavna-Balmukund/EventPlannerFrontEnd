import { Form, FloatingLabel, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const VendorFields = ({ formdata, handleChange }) => {
  const bgroup = useSelector((state)=>state.usertype.grouptype)
  const bcategory = useSelector((state)=>state.usertype.categorytype)
  const filteredCategory = bcategory.filter((g)=>g.gid?._id === formdata.businessgroup)

  return (
     <>
  
        <Col sm={12} className='mb-3'>
          <Form.Group>
            <FloatingLabel label='Business Name'>
              <Form.Control placeholder='' name='businessname' value={formdata.businessname} onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
        </Col>

         <Col sm={6} className='mb-3'>
                 <Form.Group>
                   <FloatingLabel  label="Business Group" >
                     <Form.Select name='businessgroup' onChange={handleChange} value={formdata.gname}>
                       <option value=''>Choose Business Group</option>
                       {
                         bgroup.map((item)=>(
                           <option value={item._id || "--N/A--"}  key={item._id}>{item.gname}</option>
                         ))

                        
                       }
                     </Form.Select>
                   </FloatingLabel>
                 </Form.Group>
               </Col>
               
                <Col sm={6} >
                 <Form.Group>
                   <FloatingLabel  label="Business Category" >
                     <Form.Select name='businesscategory' onChange={handleChange} value={formdata.businesscategory}>
                       <option>Choose Business Category</option>
                       {
                         filteredCategory.map((item)=>(
                           <option value={item._id || "--N/A--"}  key={item._id}>{item.cname}</option>
                         ))
                       }
                     </Form.Select>
                   </FloatingLabel>
                 </Form.Group>
               </Col>
       
  </>
  )
}

export default VendorFields