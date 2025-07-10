import { Modal, Row, Col, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"

const ViewMoreInfo = ({ data, modelopen }) => {
    if (!modelopen) return null;
    const dispatch = useDispatch()
    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
            <Modal.Header closeButton>
                <Modal.Title>Personal Detailes</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row className="userinfo">
                    <Col sm={12} className="text-center "><span className="fw-semibold ">Email:-</span><span>{data?.email || ""}</span></Col>
                    <Col sm={6}><span className="fw-semibold">Username:-</span><span>{data?.username || ""}</span></Col>




                    {
                        (modelopen === 'viewModel' && data?.usertype?.userrole === 'customer') ? (
                            <>
                                {/* <Row> */}
                                <Col sm={6}><span className="fw-semibold">First Name:-</span><span>{data?.firstname || ""}</span></Col>
                                <Col sm={6}><span className="fw-semibold">Last Name:-</span><span>{data?.lastname || ""}</span></Col>
                                <Col sm={6}><span className="fw-semibold">Middle Name:-</span><span>{data?.middlename || ""}</span></Col>
                                <Col sm={6}><span className="fw-semibold">Event Date:-</span><span>{data?.eventdate
                                 ? new Date(data.eventdate).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                }) : "--N/A--"}</span></Col>
                                <Col sm={6}><span className="fw-semibold">Phone Number:-</span><span>{data?.phonenumber || ""}</span></Col>

                                {/* </Row> */}
                            </>
                        ) :
                            (modelopen === 'viewModel' && data?.usertype?.userrole === 'vendor') && (
                                <>
                                <Col sm={6}><span className="fw-semibold">Business Name:-</span><span>{data?.businessname || ""}</span></Col>
                                <Col sm={6}><span className="fw-semibold">Country Name:-</span><span>{data?.country?.countryname || ""}</span></Col>
                                   
                                </>
                            )
                    }
                    <Col className={`${data?.usertype?.userrole === 'customer' ? 'col-12 text-center' : 'col-6'}  `}><span className="fw-semibold">Userrole:-</span><span>{data?.usertype?.userrole || ""}</span></Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default ViewMoreInfo