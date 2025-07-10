import {Button,Row,Col, Container,Table} from 'react-bootstrap'
import AdminChart from './AdminChart'

const AdminDashboard = () =>{
    return(
        <>
        <div className='py-4 ps-4  fs-4 fw-semibold text-secondary'>Adminn Dashboard</div>
<Container>
        <Row className='mb-5'>
            <Col sm={6} className='  bg-white ' style={{backgroundColor:'var(--accent-bg-color)'}}>
            <div className='rounded-4 boxShadow px-3 pt-3'>
                <h5 className='mb-4 text-secondary'>Total Weddings</h5>
                <div className='d-flex align-items-baseline '><p className='me-3 fs-3 fw-bold'> 150</p><p className='text-secondary fw-medium'> Then Last Month</p></div>
                </div>
            </Col>
             <Col sm={6} className=' bg-white ' >
              <div className='rounded-4 boxShadow px-3 pt-3'>
                <h5 className='mb-4 text-secondary'>Total Earnings</h5>
                <div className='d-flex align-items-baseline '><p className='me-3 fs-3 fw-bold'> 300,000</p><p className='text-secondary fw-medium'>Then Last Month</p></div>
                </div>
            </Col>
        </Row>
</Container>
        <AdminChart/>

        <Container>
            <Row className='my-5'>
                <Col sm={6} className='dashBooking'>
                <div  className='px-4 boxShadow rounded-4 py-3' style={{maxHeight:'350px',overflowY:'scroll'}}>
                <div className='d-flex justify-content-between align-items-center'><p className='mb-0 fw-medium fs-5'>UpComming Weddings</p><Button>This Month</Button></div>
                <div><p className='mb-0 text-secondary text-center fs-6 fw-medium'> Number of Upcomming  Weddings</p><p className='fs-1 fw-bold text-center'>75</p></div>

                <div className='py-3 border-top px-3'>
                </div>

                 <Table responsive>
                    <thead>
                        <tr className="text-center">
                            <th>Icon</th>
                            <th >Name</th>
                            <th>Date</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-3"><p className='mb-0'>Jone</p><p className='mb-0'>Premium Package</p></td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                            </tr>
                               <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-3"><p className='mb-0'>Jone</p><p className='mb-0'>Premium Package</p></td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                            </tr>
                                                                  
                    </tbody>
                </Table>
                </div>
                </Col>

                <Col sm={6} >
                <div  className='px-4 boxShadow rounded-4 py-3 dashBooking' style={{maxHeight:'350px',overflowY:'scroll'}}>
                    <h4>Booking List</h4>  {/*put serch button here when data will comming from backend*/}
                         <Table responsive>
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '12%' }}>Name</th>
                            <th  style={{ width: '12%' }}>Wedding Date</th>
                            <th>Package</th>
                            <th>Phone Nuber</th>
                            <th style={{ width: '15%' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                                <td className="align-middle px-3 text-start">Premiul Package</td>
                                <td className="align-middle " >
                                    789456135
                                </td>
                                <td className="align-middle px-2 ">
                                   Pending
                                </td>
                            </tr>
                            
                             <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                                <td className="align-middle px-3 text-start">Premiul Package</td>
                                <td className="align-middle " >
                                    789456135
                                </td>
                                <td className="align-middle px-2 ">
                                   Pending
                                </td>
                            </tr>
                             <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                                <td className="align-middle px-3 text-start">Premiul Package</td>
                                <td className="align-middle " >
                                    789456135
                                </td>
                                <td className="align-middle px-2 ">
                                   Pending
                                </td>
                            </tr>
                             <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                                <td className="align-middle px-3 text-start">Premiul Package</td>
                                <td className="align-middle " >
                                    789456135
                                </td>
                                <td className="align-middle px-2 ">
                                   Pending
                                </td>
                            </tr>
                              <tr className="text-center ">
                                <td className="align-middle px-2 ">Jone</td>
                                <td className="align-middle px-2 ">
                                   25/07/25
                                </td>
                                <td className="align-middle px-3 text-start">Premiul Package</td>
                                <td className="align-middle " >
                                    789456135
                                </td>
                                <td className="align-middle px-2 ">
                                   Pending
                                </td>
                            </tr>
                       
                    </tbody>
                </Table>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default AdminDashboard
// rgb(0, 0,0,.1) 0px 0px 11px 0px
// rgb(0, 0,0,.1) 0px 0px 10px 2px