import { Modal, Form, Button } from "react-bootstrap"
import { closeAdminModal, Userrole } from "../../../../store/slice/AdminSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { showtoast } from "../../../../store/slice/toastify"
import { current } from "@reduxjs/toolkit"


const AddUsertype = ({ data, modelopen }) => {
    const dispatch = useDispatch()
   
    const [usertypeName, setUsertypeName] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setUsertypeName({ ...usertypeName, [name]: value })
       console.log('name',name,'v',value)
    }

    const [del, setDel] = useState('')
    const delChange = (e) => {
        setDel(e.target.value)
    }

    const handleAdd = async () => {
        try {
            if (modelopen === 'addUsertype') {
                const res = await axios.post('http://localhost:5000/usertype', usertypeName)
                console.log(res,'user added', res.data.data.message)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            }
            else if (modelopen === 'editUsertype') {
                const res = await axios.put(`http://localhost:5000/usertype/updateUsertype/${data._id}`, usertypeName)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                console.log(res.data.data.message, 'edit',res)
            }
            else if(modelopen==='deleteUsertype'){
                if (del === data.userrole) {
                    const res = await axios.delete(`http://localhost:5000/usertype/deleteUsertype/${data._id}`)
                    console.log('first')
                    dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                }
            }
                dispatch(closeAdminModal())
             const updatedList = await axios.get("http://localhost:5000/usertype/readUsertypes")
                dispatch(Userrole(updatedList.data.data.data))
        }
        catch (error) {
            console.log(error.response.data.data.message)
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }

    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
            <Modal.Header closeButton className="border-0">
                <Modal.Title> {modelopen === "addUsertype" ? "Add Usertype" : (modelopen === "editUsertype") ? "Edit Usertype" : "Delete Usertype"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                    
                        {modelopen === 'addUsertype' ? (
                            <>
                                <Form.Group>
                                    <Form.Label>Usertype Name : </Form.Label>
                                    <Form.Control placeholder="Enter Usertype Name" name="userrole" value={current.userrole || ""} onChange={handleChange} autoFocus />
                                </Form.Group>
                               </>
                        ) : (modelopen === 'editUsertype') ? (
                            <>
                                <Form.Group>
                                    <Form.Label>Usertype Name : {data.userrole}</Form.Label>
                                    <Form.Control onChange={handleChange} placeholder={`Edit Usertype ${data.userrole}`} value={current.userrole || ""} name="userrole" autoFocus />
                                </Form.Group>
                             
                                </>
                        ) : (
                            <>
                                <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> Usertype Name :- {data.userrole}</p></div>
                                
                                <Form.Group>
                                    <Form.Label className='fw-semibold'>Type "{data.userrole}" to complete the Action</Form.Label>
                                    <Form.Control name="del" value={del} onChange={delChange} placeholder="Enter the name Shown above" autoFocus />
                                </Form.Group>
                            </>
                        )
                        }   
                     <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 ">
                {(modelopen === 'addUsertype' || modelopen === 'editUsertype') ? (
                    <Button className="me-4" onClick={handleAdd} type='submit'  >save
                    </Button>
                ) : (
                    <Button className="me-4 bg-danger " type="submit" onClick={handleAdd} disabled={del !== data.userrole}>Delete</Button>
                )}
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUsertype