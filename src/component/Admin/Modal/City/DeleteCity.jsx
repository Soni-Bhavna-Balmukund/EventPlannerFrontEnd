import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Modal, Button } from 'react-bootstrap'
import { showtoast } from "../../../../store/slice/toastify";
import { closeAdminModal, setCitiesData} from "../../../../store/slice/AdminSlice";
import axios from 'axios';

const DeleteCity = ({ data, modelopen }) => {
    
    const [del, setDel] = useState('')

    const handleDel = (e) => {
        setDel(e.target.value)
    }
    const dispatch = useDispatch();

    const handleAdd = async () => {
        if (modelopen === 'deleteCity') {
           
            if (del === data.locationName) {
                const res = await axios.delete(`http://localhost:5000/locations/deleteLocation/${data._id}`)
    
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                dispatch(closeAdminModal());
                const updatedList = await axios.get("http://localhost:5000/locations/allLocation");
                dispatch(setCitiesData(updatedList.data.data.data));
            }
        }
    }

    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
            <Modal.Header closeButton>
                <Modal.Title>Delete State</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                    <div className='d-flex justify-content-between flex-wrap' style={{ color: 'var(--color-text-on-secondary)' }}><p>City Name :- {data.locationName}</p><p>State Name :- {data?.state?.sname || "--N/A--"}</p><p>Country Name :- {data?.country?.countryname || "--N/A--"}</p></div>
                    <Form.Group>
                        <Form.Label className='fw-semibold'>Type "{data.locationName}" for complete the action</Form.Label>
                        <Form.Control autoFocus value={del} name='del' onChange={handleDel} placeholder='Enter Category Name shown ablove' />
                    </Form.Group>

                    <button type="submit" style={{ display: 'none' }}></button>

                </Form>
            </Modal.Body>
            <Modal.Footer>

                <Button className="me-4 bg-danger" onClick={handleAdd} type='submit' disabled={data.locationName !== del}>Delete</Button>

                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteCity