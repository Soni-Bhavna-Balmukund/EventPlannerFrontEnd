import { Container, Table ,Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import SignupUseEffects from '../Modals/SignupUseEffects'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal } from "../../store/slice/AdminSlice";
import { HiViewGridAdd } from "react-icons/hi";
import AddCountry from "./Modal/Country/AddCountry";


const Countries = () => {
    const countries = useSelector((state) => state.usertype.country)
    
    const { adminModalType,adminModalData ,modelopen} = useSelector((state) => state.admin)
    const dispatch = useDispatch()
  return (
     <Container fluid>
            <div className="d-flex justify-content-between px-4 fw-semibold" style={{color:'var(--primary-bg)'}}><p>All Countries</p><p>Total Countries:- {countries.length}</p></div>

            <div className="text-end py-2 mb-4 d-flex align-items-center justify-content-end" style={{background:'var(--accent-bg-color)'}}>
                <Button className="fs-5 " onClick={()=>dispatch(openAdminModal({type:'addCountry',openmodel:'addCountry'}))} style={{backgroundColor:'var(--secondary-bg)',color:'var(--color-text-on-secondary)',border:'0',marginRight:'15px'}}><HiViewGridAdd className="fs-4 me-2 "/><span>Add Country</span></Button>
            </div>
            
            <Container>
                <Table responsive striped bordered >
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '8%' }}>Sr.</th>
                            <th style={{ width: '12%' }}>Icon</th>
                            <th>Countries</th>
                            <th style={{ width: '15%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((item, index) => (
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
                                        }}
                                    >
                                        {item.countryname?.charAt(0)?.toUpperCase()}
                                    </p>
                                </td>
                                <td className="align-middle px-3 text-start">{item?.countryname || '--N/A--'}</td>
                                <td className="align-middle fs-4 " style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <span className="me-2 me-lg-3" onClick={() => dispatch(openAdminModal({type:'addCountry',data:item,openmodel:'editCountry'}))}><FaRegEdit /></span>
                                    <span onClick={() => dispatch(openAdminModal({type:'addCountry',data:item,openmodel:'deleteCountry'}))}><RiDeleteBin6Line /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {adminModalType === 'addCountry' && <AddCountry data={adminModalData} modelopen={modelopen}/>}

                <SignupUseEffects />
            </Container>
            </Container>
  )
}

export default Countries