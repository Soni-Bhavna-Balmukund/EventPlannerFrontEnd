import { Link } from 'react-router-dom'
import { FooterMenuLsit } from './Footermenu'
import { Row, Col, Container } from 'react-bootstrap'
console.log(FooterMenuLsit, 'menu')
console.log('menu')
const Footer = () => {
    return (
        <>
            <Container>
                <ul className='px-3 pb-2'>

                    <Row className='flex-wrap justify-content-around'>
                        {FooterMenuLsit.map((item, ind) => (
                            <Col key={ind} md='auto' sm={6} xs={12}>
                                {item.islogo ? (
                                    <img src={item.logo} alt="logo Event planner"  style={{width:'150px'}}/>
                                ) : (
                                    <>
                                        <h5>{item.heading}</h5>
                                        <ul className='ps-0 mt-3'>
                                            {item.links.map((link, i) => (
                                                <li key={i} className=' list-unstyled mb-1'><Link className='text-decoration-none textSecondary' to={link.path}>{link.name}</Link></li>
                                            ))
                                        }
                                        </ul>
                                        </>
                                        )
                                 }
                                {/* </div> */}
                            </Col>
                        ))
                        }
                    </Row>
                </ul>
            </Container>
        </>
    )
}
export default Footer