import { Col, Container, Row } from "react-bootstrap"
import venicon1 from '../assets/images/why_icon1.png'
import venicon2 from '../assets/images/why_icon2.png'
import venicon3 from '../assets/images/why_icon3.png'
import venicon4 from '../assets/images/why_icon4.png'
const HeplUs_WhyUs = () => {
  return (
    <>
        <Container className="py-5 text-center">
            <Row>
                <Col lg={3} md={6} xs={12}>
                <div className="d-md-block d-none">
                <img src={venicon1} alt=""  className="w-25 "/>
                </div>
                <h5 className=" py-2 mb-0" style={{color:'var(--primary-bg)'}}>Wedding Vendors</h5>
                <p>Find top rated wedding vendors in budget</p>
                </Col>
                <Col lg={3} md={6} xs={12}>
                <div className="d-md-block d-none">
                <img src={venicon2} alt=""  className="w-25 "/>
                </div>
                <h5 className=" py-2 mb-0" style={{color:'var(--primary-bg)'}}>Wedding Website</h5>
                <p>Share important event details with all your guests through a personalized website for free.</p>
                </Col>
                <Col lg={3} md={6} xs={12}>
                <div className="d-md-block d-none">
                <img src={venicon3} alt=""  className="w-25 "/>
                </div>
                <h5 className=" py-2 mb-0" style={{color:'var(--primary-bg)'}}>Real Weddings</h5>
                <p>Get inspired by real Indian weddings around the world.</p>
                </Col>
                <Col lg={3} md={6} xs={12}>
                <div className="d-md-block d-none">
                <img src={venicon4} alt=""  className="w-25 "/>
                </div>
                <h5 className=" py-2 mb-0" style={{color:'var(--primary-bg)'}}>Wedding Photos</h5>
                <p>Search, save & share thousands of wedding photos and ideas.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default HeplUs_WhyUs