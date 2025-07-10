import { Outlet } from "react-router"
import AdminHeader from "../component/Admin/AdminHeader"
import AdminFooter from "../component/Admin/AdminFooter"
import AdminSidebar from "../component/Admin/AdminSidebar"
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from "react-redux"

const AdminLayout = () => {
    const show = useSelector((state) => state.admin.sidebar)
    return (
        <>
            <Container fluid className="px-0 min-vh-100 d-flex flex-column">
                <AdminHeader />

                <Row className="m-0 flex-grow-1" style={{ flex: 1 }} >
                    {/* for sidebar now */}
                    <Col className={!show ? ('d-md-block col-3 boxShadow    col-lg-2 d-none') : ('d-none')} style={{ backgroundColor: 'var(--secondary-bg)' }}>
                        <AdminSidebar />
                    </Col>

                    {/* Main content Outlet */}
                    <Col className={!show ? 'col-md-9 col-lg-10  d-flex flex-column ' : 'col-sm-12 mt-5 d-flex flex-column'}>
                        <div className="flex-grow-1">
                            <Outlet />
                        </div>

                        <div className=" ">
                            <AdminFooter />
                        </div>
                    </Col>
                </Row>
                {/* </div> */}
            </Container>
        </>
    )
}
export default AdminLayout