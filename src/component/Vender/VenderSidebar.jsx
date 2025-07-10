import { Offcanvas, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from "../../store/slice/AdminSlice"

const VenderSidebar = () => {
    const show = useSelector((state) => state.admin.sidebar)
    console.log(show, 'show')
    const dispatch = useDispatch()

    return (
        <>
            <Offcanvas show={show} onHide={() => dispatch(setSidebar())} responsive="md" className='w-255px'>
                <Offcanvas.Header closeButton style={{ backgroundColor: 'var(--secondary-bg)' }}>nffe</Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column py-4" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                    <Button className="p-0 bg-transparent border-0 textSecondary">Edit Budiness Group</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default VenderSidebar