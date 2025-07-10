import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignupUseEffects from "../../../Modals/SignupUseEffects";
import { closeAdminModal, setStatedata } from "../../../../store/slice/AdminSlice";
import axios from "axios";
import { useState } from "react";
import { showtoast } from "../../../../store/slice/toastify";

const AddState = ({ data, modelopen }) => {
  const country = useSelector((state) => state.usertype.country);
  const dispatch = useDispatch();
  const initialstate = {
    sname: "",
    countryid: "",
  };
  const [stateData, setStateData] = useState(initialstate);
  const [edit, setEdit] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateData({ ...stateData, [name]: value });
    setEdit({ ...edit, [name]: value })
  };

  const handleAdd = async () => {
    try {
      if (modelopen === 'addStates') {
        const res = await axios.post("http://localhost:5000/States", stateData);
        dispatch(
          showtoast({ message: res.data.data.message, type: "success" })
        );
      }
      else if (modelopen === 'editStates') {
        const res = await axios.put(`http://localhost:5000/States/updateState/${data._id}`, edit)
        dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
      }
      dispatch(closeAdminModal());
      const updatedList = await axios.get("http://localhost:5000/States/readState");
      dispatch(setStatedata(updatedList.data.data.data));
    } catch (error) {
      if (modelopen === 'addStates') {
        if (!stateData.countryid || !stateData.sname) {
          dispatch(showtoast({ message: "Place Enter Categry name or Select Group Name", type: "error", }));
          return;
        }
      }
      dispatch(showtoast({ message: error.response.data.data.message, type: "error" }));
    }
  };
  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{(modelopen === 'addStates') ? 'Add State' : 'Edit State'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {(modelopen === 'addStates') && (<>
            <Form.Group>
              <Form.Label>Enter State Name</Form.Label>
              <Form.Control
                placeholder="Enter State Name"
                onChange={handleChange}
                name="sname"
                value={stateData.sname || ""}
                autoFocus
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Country</Form.Label>
              <Form.Select onChange={handleChange} name="countryid" value={stateData.countryid}>
                <option value="">Select Country</option>
                {country.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.countryname}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </>)}
          {(modelopen === 'editStates') && (<>
            <Form.Group>
              <Form.Label>State Name :- {data.sname}</Form.Label>
              <Form.Control value={edit.sname || ""} name='sname' placeholder='Enter State Name' onChange={handleChange} autoFocus />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Country</Form.Label>
              <Form.Select onChange={handleChange} name='countryid' value={edit.countryid}>
                <option value="">Select Country</option>
                {
                  country.map((item, index) => (
                    <option value={item._id} key={index} >{item.countryname}</option>
                  ))}
              </Form.Select>
            </Form.Group>
          </>)
          }
          <button type="submit" style={{ display: 'none' }}></button>
        </Form>

        <SignupUseEffects />
      </Modal.Body>
      <Modal.Footer>
        {(modelopen === 'addStates' || modelopen === 'editStates') && (
          <Button className="me-4" onClick={handleAdd} type="submit"> Save </Button>)}
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddState;