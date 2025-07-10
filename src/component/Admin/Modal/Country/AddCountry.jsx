import { Modal, Form, Button } from "react-bootstrap"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { showtoast } from "../../../../store/slice/toastify"
import { countries } from "../../../../store/slice/usertype"

const AddCountry = ({ data, modelopen }) => {
    const dispatch = useDispatch()
    // const countrydata = {
    //     countryname: "",
    // }
    const [countryName, setCountryName] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setCountryName({ ...countryName, [name]: value })
    }

    const [del, setDel] = useState('')
    const delChange = (e) => {
        setDel(e.target.value)
    }

    const handleAdd = async () => {
        try {
            if (modelopen === 'addCountry') {
                const res = await axios.post('http://localhost:5000/country', countryName)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            }
            else if (modelopen === 'editCountry') {
                const res = await axios.put(`http://localhost:5000/country/updateCountry/${data._id}`, countryName)
                dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            }
            else if(modelopen==='deleteCountry'){
                if (del === data.countryname) {
                    const res = await axios.delete(`http://localhost:5000/country/deleteCountry/${data._id}`)
                    dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
                }
            }
                dispatch(closeAdminModal())
             const updatedList = await axios.get("http://localhost:5000/country/allcountry")
                dispatch(countries(updatedList.data.data.data))
        }
        catch (error) {
            console.log(error.response.data.data.message)
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }

    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
            <Modal.Header closeButton className="border-0">
                <Modal.Title> {modelopen === "addCountry" ? "Add Country" : (modelopen === "editCountry") ? "Edit Country" : "Delete Country"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                        {modelopen === 'addCountry' ? (
                            <>
                                <Form.Group>
                                    <Form.Label>Country Name : </Form.Label>
                                    <Form.Control placeholder="Enter Country Name" name="countryname" value={countryName.countryname || ""} onChange={handleChange} autoFocus />
                                </Form.Group>
                               </>
                        ) : (modelopen === 'editCountry') ? (
                            <>
                                <Form.Group>
                                    <Form.Label>Country Name : {data.countryname}</Form.Label>
                                    <Form.Control onChange={handleChange} placeholder={`Edit Country ${data.countryname}`} value={countryName.countryname || ""} name="countryname" autoFocus />
                                </Form.Group>
                             
                                </>
                        ) : (
                            <>
                                <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> Country Name :- {data.countryname}</p></div>
                                
                                <Form.Group>
                                    <Form.Label className='fw-semibold'>Type "{data.countryname}" to complete the Action</Form.Label>
                                    <Form.Control name="del" value={del} onChange={delChange} placeholder="Enter the name Shown above" autoFocus />
                                </Form.Group>
                            </>
                        )
                        }   
                     <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 ">
                {(modelopen === 'addCountry' || modelopen === 'editCountry') ? (
                    <Button className="me-4" onClick={handleAdd} type='submit'  >save
                    </Button>
                ) : (
                    <Button className="me-4 bg-danger " type="submit" onClick={handleAdd} disabled={del !== data.countryname}>Delete</Button>
                )}
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCountry