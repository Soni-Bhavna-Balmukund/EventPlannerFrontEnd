import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignupUseEffects from "../../../Modals/SignupUseEffects";
import { closeAdminModal } from "../../../../store/slice/AdminSlice";
import axios from "axios";
import { useState } from "react";
import { showtoast } from "../../../../store/slice/toastify";
import UseEffectsFile from "../../UseEffectsFile";

const AddArea = ({ data, modelopen }) => {
  const country = useSelector((state) => state.usertype.country);
  const states = useSelector((state) => state.admin.statesdata)
  const cities = useSelector((state)=>state.admin.citiesdata)
  const dispatch = useDispatch();

  const initialstate = { areaName:"",city: "", state: "", country: "" };
  const [AreaData, setAreaData] = useState(initialstate);
  const [edit, setEdit] = useState('')

  const selectedCountryId = (modelopen === 'addArea') ? AreaData.country : edit.country
  const filteredState = states.filter((st) => st.countryid._id === selectedCountryId)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAreaData({ ...AreaData, [name]: value });
    setEdit({ ...edit, [name]: value })
  };

  const handleAdd = async () => {
    try {
      if (modelopen === 'addArea') {
        const res = await axios.post("http://localhost:5000/Area/", AreaData);
        dispatch(showtoast({ message: res.data.data.message, type: "success" }));
      } else if (modelopen === 'editArea') {
        const res = await axios.put(`http://localhost:5000/Area/updateArea/${data._id}`, edit)
        dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
      }
      dispatch(closeAdminModal());
      const updatedList = await axios.get("http://localhost:5000/Area/allArea");
      dispatch(setAreaData(updatedList.data.data.data));
      console.log(updatedList,'up')
    } catch (error) {
      if (modelopen === 'addArea' && (!AreaData.country.countryname || !AreaData.city.locationName || !AreaData.state.sname || !AreaData.areaName)) {
        console.log(error)
         return dispatch(showtoast({ message: "Please fill all fields", type: "error", }));
        }
        dispatch(showtoast({ message: error.response.data.data.message, type: "error" }));
      }
    }

  const current = (modelopen === 'addArea') ? AreaData : edit;
  const title = (modelopen === 'addArea')? 'Add Area' : 'Edit Area';

  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
             <Form.Group>
              <Form.Label>{(modelopen === 'editArea')?`Area Name :- ${data.areaName}`:'Enter Area Name'}</Form.Label>
              <Form.Control
                placeholder="Enter Area Name"
                onChange={handleChange}
                name="areaName"
                value={current.areaName || ""}
                autoFocus />
            </Form.Group>

             <Form.Group>
              <Form.Label>Select City</Form.Label>
              <Form.Select onChange={handleChange} name="city" value={current?.city?.locationName}>
                <option value="">Select City</option>
                {cities.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item?.locationName}
                  </option>
                ))}
              </Form.Select>
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
        <UseEffectsFile/>
      </Modal.Body>
      <Modal.Footer>
        {(modelopen === 'addArea' || modelopen === 'editArea') && (
          <Button className="me-4" onClick={handleAdd} type="submit"> Save </Button>)}
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddArea;