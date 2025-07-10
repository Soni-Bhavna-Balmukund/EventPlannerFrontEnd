import { Modal, Form, Button } from "react-bootstrap"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { grouptypes } from "../../../../store/slice/usertype"
import { showtoast } from "../../../../store/slice/toastify"

const AddGroup = ({ data, modelopen }) => {
    const dispatch = useDispatch()
    const groupdata = {
        gname: "",
        remark: ""
    }
    const [groupName, setGroupName] = useState(groupdata)

    const handleChange = (e) => {
        const { name, value } = e.target
        setGroupName({ ...groupName, [name]: value })
    }

    const [del, setDel] = useState('')
    const delChange = (e) => {
        setDel(e.target.value)
    }

    const handleAdd = async () => {
        try {
            if (modelopen === 'addGroup') {
                const res = await axios.post('http://localhost:5000/businessgroup', groupName)
                console.log('group added', res.data.data.message)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            }
            else if (modelopen === 'editGroup') {
                const res = await axios.put(`http://localhost:5000/businessgroup/updateGroup/${data._id}`, groupName)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                console.log(res.data.data.message, 'edit')
            }
            else if(modelopen==='delGroup'){
                if (del === data.gname) {
                    const res = await axios.delete(`http://localhost:5000/businessgroup/deleteGroup/${data._id}`)
                    dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                }
            }
                dispatch(closeAdminModal())
             const updatedList = await axios.get("http://localhost:5000/businessgroup/allgroup")
                dispatch(grouptypes(updatedList.data.data.data))
        }
        catch (error) {
            console.log(error.response.data.data.message)
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }

    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
            <Modal.Header closeButton className="border-0">
                <Modal.Title> {modelopen === "addGroup" ? "Add Business Group" : (modelopen === "editGroup") ? "Edit Business Group" : "Delete Business Group"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                        {modelopen === 'addGroup' ? (
                            <>
                                <Form.Group>
                                    <Form.Label>Group Name : </Form.Label>
                                    <Form.Control placeholder="Enter Group Name" name="gname" value={groupName.gname || ""} onChange={handleChange} autoFocus />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Group Remark : </Form.Label>
                                    <Form.Control placeholder="Enter Group Remark" name="remark" value={groupName.remark || ""} onChange={handleChange} />
                                </Form.Group></>
                        ) : (modelopen === 'editGroup') ? (
                            <>
                                <Form.Group>
                                    <Form.Label>Group Name : {data.gname}</Form.Label>
                                    <Form.Control onChange={handleChange} placeholder={`Edit Group ${data.gname}`} value={groupName.gname || ""} name="gname" autoFocus />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Group Remark : {data.remark}</Form.Label>
                                    <Form.Control onChange={handleChange} placeholder={`Edit Group ${data.remark}`} value={groupName.remark || ""} name="remark" />
                                </Form.Group>
                                </>
                        ) : (
                            <>
                                <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> Group Name :- {data.gname}</p></div>
                                <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> Remark :- {data.remark}</p></div>
                                <Form.Group>
                                    <Form.Label className='fw-semibold'>Type "{data.gname}" to complete the Action</Form.Label>
                                    <Form.Control name="del" value={del} onChange={delChange} placeholder="Enter the name Shown above" autoFocus />
                                </Form.Group>
                            </>
                        )
                        }   
                     <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 ">
                {(modelopen === 'addGroup' || modelopen === 'editGroup') ? (
                    <Button className="me-4" onClick={handleAdd} type='submit'  >save
                    </Button>
                ) : (
                    <Button className="me-4 bg-danger " type="submit" onClick={handleAdd} disabled={del !== data.gname}>Delete</Button>
                )}
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddGroup