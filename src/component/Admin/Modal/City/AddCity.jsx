import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignupUseEffects from "../../../Modals/SignupUseEffects";
import { closeAdminModal, setCitiesData, setStatedata } from "../../../../store/slice/AdminSlice";
import axios from "axios";
import { useState } from "react";
import { showtoast } from "../../../../store/slice/toastify";

const AddCity = ({ data, modelopen }) => {
  const country = useSelector((state) => state.usertype.country);
  const states = useSelector((state) => state.admin.statesdata)
  const dispatch = useDispatch();

  const initialstate = { locationName: "", state: "", country: "" };
  const [cityData, setCityData] = useState(initialstate);
  const [edit, setEdit] = useState('')

  const selectedCountryId = (modelopen === 'addCity') ? cityData.country : edit.country
  const filteredState = states.filter((st) => st.countryid._id === selectedCountryId)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityData({ ...cityData, [name]: value });
    setEdit({ ...edit, [name]: value })
  };

  const handleAdd = async () => {
    try {
      if (modelopen === 'addCity') {
        const res = await axios.post("http://localhost:5000/locations", cityData);
        dispatch(showtoast({ message: res.data.data.message, type: "success" }));
      } else if (modelopen === 'editCity') {
        const res = await axios.put(`http://localhost:5000/locations/updateLocation/${data._id}`, edit)
        dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
      }
      dispatch(closeAdminModal());
      const updatedList = await axios.get("http://localhost:5000/locations/allLocation");
      dispatch(setCitiesData(updatedList.data.data.data));
    } catch (error) {
      if (modelopen === 'addCity' && (!cityData.country || !cityData.locationName || !cityData.state)) {
         return dispatch(showtoast({ message: "Please fill all fields", type: "error", }));
        }
        dispatch(showtoast({ message: error.response.data.data.message, type: "error" }));
      }
    }

  const current = (modelopen === 'addCity') ? cityData : edit;
  const title = (modelopen === 'addCity')? 'Add City' : 'Edit City';

  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group>
              <Form.Label>{(modelopen === 'editCity')?`City Name :- ${data.locationName}`:'Enter City Name'}</Form.Label>
              <Form.Control
                placeholder="Enter City Name"
                onChange={handleChange}
                name="locationName"
                value={current.locationName || ""}
                autoFocus />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Country</Form.Label>
              <Form.Select onChange={handleChange} name="country" value={current.country}>
                <option value="">Select Country</option>
                {country.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.countryname}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Select State</Form.Label>
              <Form.Select onChange={handleChange} name="state" value={current.state}>
                <option value="">Select State</option>
                {filteredState.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.sname}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
         
          <button type="submit" style={{ display: 'none' }}></button>
        </Form>
        <SignupUseEffects />
      </Modal.Body>
      <Modal.Footer>
        {(modelopen === 'addCity' || modelopen === 'editCity') && (
          <Button className="me-4" onClick={handleAdd} type="submit"> Save </Button>)}
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCity;