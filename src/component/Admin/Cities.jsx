import {Container,Table,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal } from "../../store/slice/AdminSlice";
import UseEffectsFile from './UseEffectsFile';
import AddCity from './Modal/City/AddCity';
// import DeleteCity from './Modal/City/deleteCity';
import DeleteCity from './Modal/City/DeleteCity'
const Cities =() =>{
    const {adminModalData,adminModalType,modelopen} = useSelector((state)=>state.admin)
    const city = useSelector((state)=>state.admin.citiesdata)
    const dispatch = useDispatch()
    return(
        <> 
        <Container fluid>
             <div className="d-flex justify-content-between px-4 fw-semibold" style={{color:'var(--primary-bg)'}}><p>All  city</p><p>Total Category:- {city.length}</p></div>

         <div className="text-end py-2 mb-4" style={{background:'var(--accent-bg-color'}}><Button onClick={()=>dispatch(openAdminModal({type:'addCity',openmodel:'addCity'}))} style={{backgroundColor:'var(--secondary-bg)',color:'var(--color-text-on-secondary)',border:'0',marginRight:'15px'}}>Add New City</Button></div>
            <Container>
                <Table responsive striped bordered >
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '8%' }}>Sr.</th>
                            <th style={{ width: '12%' }}>Icon</th>
                            <th>City Name</th>
                            <th style={{ width: '20%' }}>State Name</th>
                            <th style={{ width: '20%' }}>Country Name</th>
                            <th style={{ width: '16%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {city.map((item, index) => (
                            <tr key={index} className="text-center hover-table">
                                <td className="align-middle px-2 ">{index + 1}</td>
                                <td className="align-middle px-2 ">
                                    <p
                                        className="rounded-circle m-0 d-inline-block  text-white "
                                        style={{
                                            backgroundColor: 'var(--accent-bg-color)',
                                            minWidth: '30px',
                                            height: '30px',
                                            lineHeight: '28px',
                                        }}>
                                        {item.locationName.charAt(0).toUpperCase()}
                                    </p>
                                </td>
                                <td className="align-middle px-3 text-start">{item.locationName}</td>
                                <td className="align-middle px-3 text-start">{item.state?.sname || '--N/A--'}</td>
                                <td className="align-middle px-3 text-start">{item.country?.countryname || '--N/A--'}</td>
                                     
                                <td className="align-middle fs-4 " style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <span className=" me-2 me-lg-3" onClick={() => dispatch(openAdminModal({type:'addCity',data:item,openmodel:'editCity'}))}><FaRegEdit /></span>
                                    
                                    <span onClick={() => dispatch(openAdminModal({type:'deleteCity',data:item,openmodel:'deleteCity'}))}><RiDeleteBin6Line /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {adminModalType === 'addCity' && <AddCity data={adminModalData} modelopen={modelopen}/>}
                {adminModalType === 'deleteCity' && <DeleteCity data={adminModalData} modelopen={modelopen}/>}

                <UseEffectsFile />
            </Container>
            </Container>
            </>
    )
}
export default Cities