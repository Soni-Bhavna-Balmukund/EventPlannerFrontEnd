import { Container, Table ,Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal } from "../../store/slice/AdminSlice";
import { HiViewGridAdd } from "react-icons/hi";
import AddUsertype from "./Modal/Usertype/AddUsertype";
import UseEffectsFile from "./UseEffectsFile";


const Usertypes = () => {
    const usertype = useSelector((state) => state.admin.userroles)
    const { adminModalType,adminModalData ,modelopen} = useSelector((state) => state.admin)
    const dispatch = useDispatch()
  return (
     <Container fluid>
            <div className="d-flex justify-content-between px-4 fw-semibold" style={{color:'var(--primary-bg)'}}><p>All usertype</p><p>Total usertype:- {usertype.length}</p></div>

            <div className="text-end py-2 mb-4 d-flex align-items-center justify-content-end" style={{background:'var(--accent-bg-color'}}>
                <Button className="fs-5 " onClick={()=>dispatch(openAdminModal({type:'addUsertype',openmodel:'addUsertype'}))} style={{backgroundColor:'var(--secondary-bg)',color:'var(--color-text-on-secondary)',border:'0',marginRight:'15px'}}><HiViewGridAdd className="fs-4 me-2 "/><span>Add Usertype</span></Button>
            </div>
            
            <Container>
                <Table responsive striped bordered >
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '8%' }}>Sr.</th>
                            <th style={{ width: '12%' }}>Icon</th>
                            <th>Usertype</th>
                            <th style={{ width: '15%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usertype.map((item, index) => (
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
                                        {item.userrole.charAt(0).toUpperCase()}
                                    </p>
                                </td>
                                <td className="align-middle px-3 text-start">{item?.userrole || '--N/A--'}</td>
                                <td className="align-middle fs-4 " style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <span className="me-2 me-lg-3" onClick={() => dispatch(openAdminModal({type:'addUsertype',data:item,openmodel:'editUsertype'}))}><FaRegEdit /></span>
                                    <span onClick={() => dispatch(openAdminModal({type:'addUsertype',data:item,openmodel:'deleteUsertype'}))}><RiDeleteBin6Line /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {adminModalType === 'addUsertype' && <AddUsertype data={adminModalData} modelopen={modelopen}/>}

                <UseEffectsFile />
            </Container>
            </Container>
  )
}

export default Usertypes