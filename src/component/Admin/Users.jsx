import { Container, Table ,Button,Form} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal } from "../../store/slice/AdminSlice";
import { HiViewGridAdd } from "react-icons/hi";
import UseEffectsFile from "./UseEffectsFile";
import { useState } from "react";
import ViewMoreInfo from "./Modal/User/ViewMoreInfo";
import AddUser from "./Modal/User/AddUser";
import DeleteUser from "./Modal/User/DeleteUser";
 
const Users = () => {
    const user = useSelector((state) => state.admin.users)
    const { adminModalType,adminModalData ,modelopen} = useSelector((state) => state.admin)

    const [filterType,setFilterType] = useState('all')
    const [searchText,setSearchText] = useState('')

    const filterdUser = user.filter((u)=>{
        if (u.usertype?.userrole?.toLowerCase() === 'admin') return false;
      if(filterType==='all') return true;
      return u.usertype?.userrole?.toLowerCase() === filterType
    })

    const searchFilter = filterdUser.filter((u)=>
    u.username?.toLowerCase().includes(searchText.toLowerCase()) || u.email?.toLowerCase().includes(searchText.toLowerCase()))

    const dispatch = useDispatch()
  return (
     <Container fluid>
            <div className="d-flex justify-content-between px-4 fw-semibold pt-4" style={{color:'var(--primary-bg)'}}>
              {/* <p>All users</p> */}
            <p> <Form.Control
            placeholder="Search by name or email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: '250px' }}
          /></p>
            <p>Total users:- {user.length}</p></div>
        
             <div className="d-flex align-items-center justify-content-between py-2 px-4 mb-3" style={{ background: 'var(--accent-bg-color)' }}>
        <div className="d-flex gap-3">
          <Form.Select
            onChange={(e) => setFilterType(e.target.value)}
            value={filterType}
            style={{ width: '200px' }}
          >
            <option value="all">All Users</option>
            <option value="customer">Customers</option>
            <option value="vendor">Vendors</option>
          </Form.Select>

         
        </div>

        <Button className="fs-5"
          onClick={() => dispatch(openAdminModal({ type: 'addUser', openmodel: 'addUser' }))}
          style={{
            backgroundColor: 'var(--secondary-bg)',
            color: 'var(--color-text-on-secondary)',
            border: '0'
          }}
        >
          <HiViewGridAdd className="fs-4 me-2" />
          Add Usertype
        </Button>
      </div>
            
            <Container>
                <Table responsive striped bordered >
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '8%' }}>Sr.</th>
                            <th style={{ width: '12%' }}>Icon</th>
                            <th>Username</th>
                            <th style={{ width: '15%' }}>First Name</th>
              <th>Email</th>
              <th  style={{ width: '15%' }}>User Type</th>
              <th  style={{ width: '18%' }}>More info</th>
                            <th style={{ width: '15%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchFilter.map((item, index) => (
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
                                        {item.username?.charAt(0).toUpperCase() || '?'}
                                    </p>
                                </td>
                                <td className="align-middle px-3 text-start">{item?.username || '--N/A--'}</td>
                                <td  className="align-middle p-xl-2 p-0" >{item?.firstname || '--N/A--'}</td>
                                <td className="align-middle px-3 text-start">{item?.email || '--N/A--'}</td>
                                <td className="align-middle text-start">
                  <span className="">
                    {item.usertype?.userrole || 'Unknown'}
                  </span>
                </td> 
                <td><Button className="bg-transparent border-0 " onClick={()=>dispatch(openAdminModal({type:'viewModel',data:item,openmodel:'viewModel'}))} style={{backgroundColor:'var(--color-text-on-secondary)!important  '}}>View</Button></td>
                                <td className="align-middle fs-4 " style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <span className="me-2 me-lg-3" onClick={() => dispatch(openAdminModal({type:'addUser',data:item,openmodel:'editUser'}))}><FaRegEdit /></span>
                                    <span onClick={() => dispatch(openAdminModal({type:'deleteUser',data:item,openmodel:'deleteUser'}))}><RiDeleteBin6Line /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {adminModalType === 'addUser' && <AddUser data={adminModalData} modelopen={modelopen}/>}
                {adminModalType === 'deleteUser' && <DeleteUser data={adminModalData} modelopen={modelopen}/>}
                {adminModalType === 'viewModel' && <ViewMoreInfo data={adminModalData} modelopen={modelopen}/>}

                <UseEffectsFile />
            </Container>
            </Container>
  )
}

export default Users