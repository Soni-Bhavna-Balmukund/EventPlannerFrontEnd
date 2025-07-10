import { Outlet } from "react-router"
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from "react-redux"
import VenderHeader from "../component/Vender/VenderHeader"
import VenderFooter from "../component/Vender/VenderFooter"
import VenderSidebar from "../component/Vender/VenderSidebar"

const VenderLayout = () => {
    const show = useSelector((state) => state.admin.sidebar)
    return (
        <>
            <Container fluid className="px-0 min-vh-100 d-flex flex-column">
                <VenderHeader />

                <Row className="flex-grow-1 m-0" style={{ flex: 1 }}>
                    {/* Sidebar */}
                    <Col
                        className={
                            !show
                                ? 'd-md-block col-3 col-lg-2 boxShadow d-none'
                                : 'd-none'
                        }
                        style={{ backgroundColor: 'var(--secondary-bg)' }}
                    >
                        <VenderSidebar />
                    </Col>

                    {/* Main Content */}
                    <Col
                        className={
                            !show
                                ? 'col-md-9 col-lg-10 d-flex flex-column'
                                : 'col-sm-12 d-flex flex-column'
                        }
                    >
                        <div className="flex-grow-1">
                            <Outlet />
                        </div>

                        <div>
                            <VenderFooter />
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default VenderLayout