import { Row, Form,Col,Modal ,Button} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { closeAdminModal } from "../../../../store/slice/AdminSlice";
import CustomSelect from "../../../Vender/CustomSelect";
import { useSelector } from "react-redux";

const CreatePlace = ({formdata,handleImageChange,setFormData,addPlace,imgPrev,data,modelopen}) => {
   const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
        const { categorytype: cat, grouptype: group, country, location: city } = useSelector(state => state.usertype);
          const {statesdata:state,areadata: area} = useSelector((state)=>state.admin)
        const filteredStates = state.filter(s => s.countryid?._id === formdata.country?._id);
    const dispatch = useDispatch()
    const isVenueGroup = formdata.business_group?.gname?.toLowerCase().includes('venue');
    const selectField = [
        { name: 'business_group', options: group, labelKey: 'gname' },
        { name: 'business_category', options: cat, labelKey: 'cname' },
        { name: 'area', options: area, labelKey: 'areaName' },
        { name: 'city', options: city, labelKey: 'locationName' },
        { name: 'state', options: filteredStates, labelKey: 'sname' },
        { name: 'country', options: country, labelKey: 'countryname' }
    ]
    console.log(area,'uhuyf')
  return (
    <Modal show={true} onHide={()=>dispatch(closeAdminModal())} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Event Places</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Row >
            { ['title','price','address1','address2','landmark','pincode','rating'].map(name=>(
                <Col sm={6} key={name}>
                    <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
                    <Form.Control value={formdata[name]} name={name} onChange={handleInputChange}/>
                </Col>
              ))}
            {selectField.map(({ name, options, labelKey})=>(
                <Col sm={6} key={name}>
                  <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
                  <CustomSelect name={name} value={formdata[name]} options={options} labelKey={labelKey}
                  onChange={(n, val) => setFormData({ ...formdata, [n]: val })} placeholder={`Choose ${name}`} />
                </Col>
            ))}
             {/* { ['phonenumber','price_per_plate','guest_limit','discount','shortDiscription','longDiscription','status','room_price','total_rooms','food_category'].map(name=>(
                <Col sm={6} key={name}>
                    <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
                    <Form.Control value={formdata[name]} name={name} onChange={handleInputChange}/>
                </Col>
              ))} */}
              {['phonenumber', 'discount', 'shortDiscription', 'longDiscription', 'status'].map(name => (
    <Col sm={6} key={name}>
        <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
        <Form.Control value={formdata[name]} name={name} onChange={handleInputChange} />
    </Col>
))}

{/* Venue-specific fields */}
{isVenueGroup && ['price_per_plate', 'guest_limit', 'room_price', 'total_rooms', 'food_category'].map(name => (
    <Col sm={6} key={name}>
        <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
        <Form.Control value={formdata[name]} name={name} onChange={handleInputChange} />
    </Col>
))}

            <Col className={`${isVenueGroup ? 'col-6' : 'col-12'}`}>
              <Form.Label>Upload Images</Form.Label>
              <Form.Control type="file" multiple onChange={handleImageChange} />
              <div className="d-flex flex-wrap mt-2 ">
                {imgPrev.map((img, i) => (
                  <img key={i} src={img.src} alt={img.name} height={250} className="me-2 " />
                ))}
              </div>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
         {(modelopen === 'addEventPlace' || modelopen === 'editEventPlace') && (
                    <Button className="me-4" onClick={addPlace} type='submit'  >save
                    </Button>
                ) }
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreatePlace