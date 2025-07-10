import { useSelector } from "react-redux"
import UseEffectsFile from "./Admin/UseEffectsFile"
import { Col, Container, Form, Row } from "react-bootstrap"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const AllEventPlaces = () => {
    const allPlaces = useSelector((state)=>state.admin.eventPlace)
    console.log(allPlaces,'pl')
    const [searchText,setSearchText] = useState('')
    const truncateText = (text, maxLength = 15) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
const truncateAdd = (add,maxLength=20) =>{
    return add.length > maxLength ? add.slice(0,maxLength) + '...' : add;
}
const searchFilter = allPlaces.filter((place)=>
place.title?.toLowerCase().includes(searchText.toLowerCase()) || place?.city?.locationName?.toLowerCase().includes(searchText.toLowerCase()) || place?.business_category?.cname?.toLowerCase().includes(searchText.toLowerCase()) ||  place?.business_grpup?.gname?.toLowerCase().includes(searchText.toLowerCase()) )
  return (
    <>
    <Container>
    <div><Form.Control value={searchText} placeholder="Search Event Places "  onChange={(e) => setSearchText(e.target.value)}/> </div>
    {searchFilter.length === 0 ? (
        <>
      <div className="text-center"> 
    <img src='https://res.cloudinary.com/dux3crjje/image/upload/v1751439642/noResultAnime_m4jypo.gif' />
  <p className=" py-3 text-muted">No results found.</p></div>
  </>
) : (
        <Row className="border-bottom mb-5">
           {
            searchFilter.map((item,index)=>(
                <Col md={4} className="px-3 py-3">
                <Link to={`/detailedPlacePage/${item._id}`} className="text-decoration-none text-light-emphasis">
                    <div className=" px-3 py-2">
                    <div style={{ width: '100%', height: '250px', overflow: 'hidden' }}><img src={item?.image[0].url} alt="" className="w-100 h-100"
    style={{ objectFit: 'cover' }}/></div>
                    <div className="d-flex justify-content-between align-items-center mb-2 "><span className="fw-bold textSecondary" title={item?.title}>{truncateText(item?.title)}</span><span><FaStar className="mb-1 me-2 textSecondary"/>{item?.rating}<prev>(3review)</prev></span></div>
                    <div><span><FaLocationDot className="mb-1 me-1 textSecondary"/>{item?.city?.locationName}</span><span title={item?.address1}className="ms-5"><FaBuildingColumns className="mb-1 me-1 textSecondary"/> {truncateAdd(`${item?.business_category?.cname || ''} / ${item?.address1 || ''}`)} </span></div>
                    <div>{item.food_category}</div>
                    <div className="d-flex justify-content-between align-items-center mb-2"><span className="me-5"><MdCurrencyRupee className="mb-1 textSecondary"/>{item?.price_per_plate}</span><span><IoIosPeople className="mb-1 fs-4 textSecondary"/>{item?.guest_limit}</span></div>
                    <div  className="d-flex justify-content-between align-items-center mb-2"><span>Total Rooms {item?.total_rooms} </span> <span className="ms-5"> Discount {item?.discount}%</span></div>
                    </div>
                </Link>
                </Col>
            ))
           }
        </Row>
)}
    </Container>
    <UseEffectsFile/></>
  )
}

export default AllEventPlaces