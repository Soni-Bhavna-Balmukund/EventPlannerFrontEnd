import { useState } from 'react'
import { Form ,Modal,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { showtoast } from '../../../../store/slice/toastify'
import { closeAdminModal, setUsers } from '../../../../store/slice/AdminSlice'
import axios from 'axios'

const DeleteUser = ({ data,modelopen}) => {
    const [del, setDel] = useState('')
    const delChange = (e) => {
        setDel(e.target.value)
    }
    const dispatch =useDispatch()

    const handleAdd = async () => {
        try {
            if (modelopen === 'deleteUser') {
                if (del === data.username) {
                    const res = await axios.delete(`http://localhost:5000/users/deleteuser/${data._id}`)
                    
                    dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                }
                dispatch(closeAdminModal())
                const updatedList = await axios.get("http://localhost:5000/users/readuser")
                dispatch(setUsers(updatedList.data.data.data))
            }
        } catch (error) {
           
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }
    return (
        <>
            <Modal show={true} onHide={() => dispatch(closeAdminModal())} >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title> Delete User </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                    <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> User Name :- {data.username}</p></div>

                    <Form.Group>
                        <Form.Label className='fw-semibold'>Type "{data.username}" to complete the Action</Form.Label>
                        <Form.Control name="del" value={del} onChange={delChange} placeholder="Enter the name Shown above" autoFocus />
                    </Form.Group>
                    <button type="submit" style={{ display: 'none' }}></button>

                </Form>
            </Modal.Body>
            <Modal.Footer>

                <Button className="me-4 bg-danger" onClick={handleAdd} type='submit' disabled={data.username !== del}>Delete</Button>

                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal >
                                </>
  )
}

export default DeleteUser