import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { revieMmodalShow } from "../../store/slice/modalSlice";
import { IoSearchOutline } from "react-icons/io5";
import "../../App.css";

const ReviewModal = () => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  return (
    <>
      <Modal size="lg" show={modal} onHide={() => dispatch(revieMmodalShow())} >
        <Modal.Header closeButton>
          <Modal.Title>Write Review For Your Wedding Vender</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5" >
          <Form.Label className="fw-medium">Select a Vender*</Form.Label>
          <div>
            <IoSearchOutline className="position-absolute fs-5 mx-3 my-2 z-1 " />{" "}
            <Form.Control
              placeholder="Type Vender Name"
              className="position-relative px-5"
            />
          </div>

          <Form.Label className="mt-3 fw-medium mb-3">Rate Vender*</Form.Label>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 fs-5">
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
              <Form.Check />
            </div>
            <span className=" d-flex justify-content-end fs-6 gap-2 align-items-center">
              <Form.Check className="fs-5" />
              Share Your Review to Facebbok
            </span>
          </div>

          <Form.Control
            as="textarea"
            rows={5}
            className="my-4 rounded-0 "
            placeholder="Tell us about your experiance*"/>

          <Form.Control
            placeholder="How much did you spend on this vender"
            className="rounded-0 py-3 "/>

          <div className="text-end pt-4">
            <Button className="bg-transparent border rounded-0 me-4 px-4 py-2 text-black ">
              Add Photos
            </Button>
            <Button className="  rounded-0 px-4 py-2 fw-medium text-white"
              style={{
                backgroundColor: "var(--accent-bg-color)",
                border: "1px solid var(--accent-bg-color)",
              }}>
              Submit Reviews
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewModal;
