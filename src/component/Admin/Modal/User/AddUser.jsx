import { Modal, Form, Button, Row } from "react-bootstrap"
import { closeAdminModal, setUsers} from "../../../../store/slice/AdminSlice"
import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { showtoast } from "../../../../store/slice/toastify"
import CommonFields from './CommonFields'
import CustomerFields from './CustomerFields'
import VendorFields from './VendorFields'
import DeleteUser from "./DeleteUser"

const AddUser = ({ data, modelopen }) => {
    const dispatch = useDispatch()
   const userrole = useSelector((state)=>state.admin.userroles)
   const [userName, setUserName] = useState('')
   const [edit, setEdit] = useState('')
   const customerRoleId = userrole?.find(role => role.userrole === "customer")?._id;
const vendorRoleId = userrole?.find(role => role.userrole === "vendor")?._id;

    const handleChange = (e) => {
        const { name, value } = e.target
        if (modelopen === "addUser") {
             let updated = { ...userName, [name]: value };
    if (name === "usertype") {
      if (value === customerRoleId) {
        updated = { ...updated, businessname: "", businessgroup: "", businesscategory: "" };
      } else if (value === vendorRoleId) {
        updated = { ...updated, eventdate: "" ,firstname:"",lastname:"",middlename:""};
      }
    }
    setUserName(updated);
        } else if(modelopen === 'editUser'){
          setEdit({ ...edit, [name]: value })
        }
      
    }
 
    const handleAdd = async () => {
        try {
            if (modelopen === 'addUser') {
                const res = await axios.post('http://localhost:5000/users/', userName)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            }
            else if (modelopen === 'editUser') {
                const res = await axios.put(`http://localhost:5000/users/updateuser/${data._id}`, edit)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            }
          
                dispatch(closeAdminModal())
             const updatedList = await axios.get("http://localhost:5000/users/readuser")
                dispatch(setUsers(updatedList.data.data.data))
        }
        catch (error) {
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }
    const formdata = (modelopen=== 'editUser')?edit:userName;
    const title = (modelopen=== 'addUser')?'Add User' :'Edit User';

    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())} size="lg">
            <Modal.Header closeButton className="border-0">
                <Modal.Title> {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                  <Row >
                  <CommonFields formdata={formdata} handleChange={handleChange}/>
                  {
                    formdata.usertype ===customerRoleId?(
                      <CustomerFields  formdata={formdata} handleChange={handleChange}/>
                    ):(formdata.usertype===vendorRoleId )?(
                      <VendorFields  formdata={formdata} handleChange={handleChange}/>
                    ):(<p className="text-muted">Please select a user role to continue.</p>)
                  }
                     </Row>
                     <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 ">
                {(modelopen === 'addUser' || modelopen === 'editUser') && (
                    <Button className="me-4" onClick={handleAdd} type='submit'  >save
                    </Button>
                ) }
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default AddUser