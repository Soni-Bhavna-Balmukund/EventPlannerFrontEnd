import { Modal ,Button, Col, Row} from "react-bootstrap"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"
import { useDispatch } from "react-redux"

const ViewPlaceInfo = ({data , modelopen}) => {
    if(!modelopen) return null
    const dispatch = useDispatch()
  return (
    <Modal show={true} onHide={()=>dispatch(closeAdminModal())} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Event Place Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className="userinfo ">
            <Col sm={12} className="fs-4 text-center"><span className="fw-semibold">Title:-</span><span>{data?.title || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Price:-</span><span>{data?.price || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Pincode:-</span><span>{data?.pincode || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Landmark:-</span><span>{data?.landmark || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Rating:-</span><span>{data?.rating || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Price Per Plate:-</span><span>{data?.price_per_plate || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Business Group :-</span><span>{data?.business_group?.gname || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Business Category :-</span><span>{data?.business_category?.cname || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Area :-</span><span>{data?.area?.areaName || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">City :-</span><span>{data?.city?.locationName || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">State :-</span><span>{data?.state?.sname || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Country :-</span><span>{data?.country?.countryname || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Guest Limit:-</span><span>{data?.guest_limit || ""}</span></Col>
           
            <Col sm={6}><span className="fw-semibold">Address 1:-</span><span>{data?.address1 || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Address 2:-</span><span>{data?.address2 || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Discount:-</span><span>{data?.discount || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Phone Nunber:-</span><span>{data?.phonenumber || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Status:-</span><span>{data?.status || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Room Price:-</span><span>{data?.room_price || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Food Category:-</span><span>{data?.food_category || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Total Rooms :-</span><span>{data?.total_rooms || ""}</span></Col>

                       
             <Col sm={6}><span className="fw-semibold ">Short Discription:-</span><span className="p-2 border" style={{height:'120px',overflow:'auto'}}>{data?.shortDiscription || ""}</span></Col>
            <Col sm={6}><span className="fw-semibold">Long Discription:-</span><span className="p-2 border" style={{height:'120px',overflow:'auto'}}>{data?.longDiscription || ""}</span></Col>
            </Row>
        </Modal.Body>
       
    </Modal>
  )
}

export default ViewPlaceInfo