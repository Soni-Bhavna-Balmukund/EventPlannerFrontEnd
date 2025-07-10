import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row,Container } from 'react-bootstrap';
import SliderPlaces from './Slider/SliderPlaces';
import UseEffectsFile from './Admin/UseEffectsFile';
import { FaStar } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';

const DetailedPlacePage = () => {
    const dispatch = useDispatch()
     const { id } = useParams();
  const allPlaces = useSelector((state) => state.admin.eventPlace);
  const selectedPlace = allPlaces.find((place) => place._id === id);

  return (
    <Container>
        <UseEffectsFile/>
         {selectedPlace ? (
            <>
        <Row className='py-5'>
            <Col lg={8}><SliderPlaces images={selectedPlace.image}/></Col>
            <Col lg={4}>
            <div className='border p-3'>
                <div className='fs-4 fw-bold textSecondary '>{selectedPlace?.title}</div>
                <div className='mt-2'>Rating {selectedPlace?.rating} <FaStar className="mb-1 me-2 textSecondary"/></div>
                <div className="d-flex justify-content-between align-items-center fw-medium my-2 border border rounded-start-4 py-2 px-3">
                    <span>Area <span className='textSecondary'>{selectedPlace?.area?.areaName}</span></span> <span>City <span className='textSecondary'>{selectedPlace?.city?.locationName}</span></span>
                </div>
                <div>Price from  <span className='textSecondary'>{selectedPlace?.price}Rs</span></div>
                <div className="d-flex justify-content-between align-items-center border rounded-end-4  py-2 px-3 my-2" >
                <div className='border-end me-3'>Guest Limit <span className='textSecondary '>{selectedPlace?.guest_limit}Rs</span></div>
                <div>Price Per Plate  <span className='textSecondary'>{selectedPlace?.price_per_plate}Rs</span></div></div>
                <div className="d-flex justify-content-between align-items-center fw-medium my-2 border border rounded-top-4 mt-3 py-2 px-3">
                    <span>Food <span className='textSecondary'>{selectedPlace?.food_category}</span></span> <span>Status <span className='textSecondary'>{selectedPlace?.status}</span></span>
                </div>

            </div>
            </Col>
        </Row>

        <div className='border p-3 mb-5'>
            <h4 className='border-bottom pb-3'>About {selectedPlace?.title}</h4>

            <p>{selectedPlace?.longDiscription}</p>
        </div>

            <h4>Faq about {selectedPlace?.title}</h4>
        <div className='mb-5 border rounded-4'>
             <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the rental only pricing per day excluding catering (if applicable at any of your venues)?</Accordion.Header>
        <Accordion.Body>
          Starts From {selectedPlace?.price}Rs. Know more on request
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What all menus & catering options do you have?</Accordion.Header>
        <Accordion.Body>
           {selectedPlace?.food_category}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How would you describe your event spaces?</Accordion.Header>
        <Accordion.Body>
           {selectedPlace?.business_category?.cname}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What all menus & catering options do you have?</Accordion.Header>
        <Accordion.Body>
          Food Category {selectedPlace?.food_category}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        
        </>
         ) : (
        <p className="text-center py-5">Loading or Not Found</p>
      )}
    </Container>
  )
}

export default DetailedPlacePage