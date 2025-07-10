import { Container, Table, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignupUseEffects from "../Modals/SignupUseEffects";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal, setEventPlace } from "../../store/slice/AdminSlice";
import DeleteCategory from "./Modal/BusinessCategory/DeleteCategory";
import { useState } from "react";
import EventPlacesFunction from "./EventPlacesFunction";
import { useEffect } from "react";
import UseEffectsFile from "./UseEffectsFile";

const EventPlaces = () => {
    const { adminModalData, adminModalType, modelopen } = useSelector((state) => state.admin);
    const [searchText, setSearchText] = useState('')
    //   const searchFilter = filterdUser.filter((u)=>
    // u.title?.toLowerCase().includes(searchText.toLowerCase()) || u.city?.toLowerCase().includes(searchText.toLowerCase()))
    const places = useSelector((state) => state.admin.eventPlace);
    console.log(places)
    const dispatch = useDispatch();

    return (
        <>
            <Container fluid>
               
                <div className="d-flex justify-content-between px-2 fw-semibold pt-4 align-items-center" style={{ color: 'var(--primary-bg)' }}>
                    <p> <Form.Control
                        placeholder="Search by name or email"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{ width: '250px' }}
                    /></p>
                    <p>All Event Places</p>
                    <p>Total users:- {places.length}</p></div>

                <div
                    className="text-end py-2 mb-4"
                    style={{ background: "var(--accent-bg-color" }}
                >
                    <Button  onClick={() => dispatch(openAdminModal({ type: "addEventPlace", openmodel: "addEventPlace", }))}
                        style={{
                            backgroundColor: "var(--secondary-bg)", color: "var(--color-text-on-secondary)", border: "0", marginRight: "15px", }}> Add New Event Place </Button>
                </div>
                <Container>
                    <Table responsive striped bordered>
                        <thead>
                            <tr className="text-center">
                                <th style={{ width: "8%" }}>Sr.</th>
                                <th style={{ width: "8%" }}>Icon</th>
                                <th style={{ width: "24%" }}>Title</th>
                                <th style={{ width: "10%" }}>Business Group</th>
                                <th style={{ width: "10%" }}>Business Category</th>
                                <th style={{ width: "10%" }}>Area</th>
                                <th>city</th>
                                <th style={{ width: "10%" }}>State</th>
                                <th style={{ width: "12%" }}>More info</th>
                                <th style={{ width: "15%" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {places.map((item, index) => (
                                <tr key={index} className="text-center hover-table">
                                    <td className="align-middle px-2 ">{index + 1}</td>
                                    <td className="align-middle px-2 ">
                                        <p
                                            className="rounded-circle m-0 d-inline-block  text-white "
                                            style={{
                                                backgroundColor: "var(--accent-bg-color)",
                                                minWidth: "30px",
                                                height: "30px",
                                                lineHeight: "28px",
                                            }}
                                        >
                                            {item.title?.charAt(0).toUpperCase() || "?"}
                                        </p>
                                    </td>
                                    <td className="align-middle px-3 ">
                                        {item?.title || "--N/A--"}
                                    </td>
                                     <td className="align-middle px-3">
                                        {item?.business_group?.gname || "--N/A--"}
                                    </td>
                                     <td className="align-middle px-3">
                                        {item?.business_category?.cname || "--N/A--"}
                                    </td>
                                    <td className="align-middle p-xl-2 p-0">
                                        {item?.area?.areaName || "--N/A--"}
                                    </td>
                                    <td className="align-middle px-3 text-start">
                                        {item?.city?.locationName || "--N/A--"}
                                    </td>
                                    <td className="align-middle">
                                        {item.state?.sname || "Unknown"}
                                    </td>
                                   
                                    <td className="align-middle ">
                                        <Button className="bg-transparent border-0 " onClick={() => dispatch(openAdminModal({ type: "viewPlaceModel", data: item, openmodel: "viewPlaceModel", }))}
                                            style={{ backgroundColor: "var(--color-text-on-secondary)!important  ", }}>
                                            View
                                        </Button>
                                    </td>
                                    <td
                                        className="align-middle fs-4 "
                                        style={{ color: "var(--color-text-on-secondary)" }}
                                    >
                                        <span
                                            className="me-2 me-lg-3"
                                            onClick={() =>
                                                dispatch(
                                                    openAdminModal({
                                                        type: "addUser",
                                                        data: item,
                                                        openmodel: "editUser",
                                                    })
                                                )
                                            }
                                        >
                                            <FaRegEdit />
                                        </span>
                                        <span
                                            onClick={() =>
                                                dispatch(
                                                    openAdminModal({
                                                        type: "deleteUser",
                                                        data: item,
                                                        openmodel: "deleteUser",
                                                    })
                                                )
                                            }
                                        >
                                            <RiDeleteBin6Line />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {adminModalType === "deleteCategory" && (
                        <DeleteCategory data={adminModalData} modelopen={modelopen} />
                    )}
                    <EventPlacesFunction/>
                    <SignupUseEffects />
                    <UseEffectsFile/>
                </Container>
            </Container>
        </>
    );
};
export default EventPlaces;
