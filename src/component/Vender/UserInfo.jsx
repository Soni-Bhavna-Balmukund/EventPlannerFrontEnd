import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import UseEffectsFile from '../Admin/UseEffectsFile'
import CustomSelect from './CustomSelect'
import SignupUseEffects from '../Modals/SignupUseEffects'
import axios from 'axios'
import { showtoast } from '../../store/slice/toastify'

const UserInfo = () => {
    const user = useSelector((state) => state.auth.user)
    const state = useSelector((state) => state.admin.statesdata)
    const { categorytype: cat, grouptype: group, country, location: city } = useSelector(state => state.usertype);
    const dispatch = useDispatch()

    const initialState = {
        email: user?.email || '',
        firstname: user?.firstname || '',
        lastname: user?.lastname || '--N/A--',
        middlename: user?.middlename || '--N/A--',
        username: user?.username || '--N/A--',
        businessname: user?.businessname || '--N/A--',
        businessgroup: group.find(g => g._id === (user?.businessgroup?._id || user?.businessgroup)) || null,
        businesscategory: cat.find(c => c._id === (user?.businesscategory?._id || user?.businesscategory)) || null,
        country: country.find(ct => ct._id === (user?.country?._id || user?.country)) || null,
        state: state.find(s => s._id === (user?.state?._id || user?.state)) || null,
        eventlocation: city.find(ci => ci._id === (user?.eventlocation?._id || user?.eventlocation)) || null,
        phonenumber: user?.phonenumber || '--N/A--',
    }
    const [formdata, setformdata] = useState(initialState)
    const filteredCategory = cat.filter(cat => cat.gid?._id === formdata.businessgroup?._id)
     const filteredStates = state.filter(s => s.countryid?._id === formdata.country?._id);
const filteredCities = city.filter(c => c.state?._id === formdata.state?._id && c.country?._id === formdata.country?._id);

 useEffect(() => {
    if (user && country.length && group.length && cat.length && state.length && city.length) {
      setformdata(initialState)
    }
  }, [user, country, group, cat, state, city])

    const handleChange = (e) => { const { name, value } = e.target; setformdata({ ...formdata, [name]: value }) }
    const handleCancel = () => setformdata(initialState)
    
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/users/updateuser/${user._id}`, formdata)
            dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
        } catch (error) {
            dispatch(showtoast({ message: error?.response?.message, type: 'error' }))
        }
    }

     const selectFields = [
    { name: 'businessgroup', options: group, labelKey: 'gname' },
    { name: 'eventlocation', options: filteredCities, labelKey: 'locationName' },
    { name: 'businesscategory', options: filteredCategory, labelKey: 'cname' },
    { name: 'state', options: filteredStates, labelKey: 'sname' },
    { name: 'country', options: country, labelKey: 'countryname' }
  ]

    if (!formdata) return <div>Loading...</div>;

    return (
        <>
            <Container className='py-5 px-4'>     
                <Form >
                    <Row>
                        <Col md={4} className='px-4 py-3 border rounded-3' style={{ color: 'var(--primary-bg)' }}>
                            <h3 className='text-center mb-4'>Info</h3>
                            <div className='loggedUserinfo'>
                                {[
                                    ['Email', formdata.email],
                                    ['First Name', formdata.firstname],
                                    ['Username', formdata.username],
                                    ['Business Name', formdata.businessname],
                                    ['Business Group', formdata.businessgroup?.gname],
                                    ['Business Category', formdata.businesscategory?.cname],
                                    ['City', formdata.eventlocation?.locationName || null],
                                    ['State', formdata.state?.sname || null],
                                    ['Country', formdata.country?.countryname],
                                    ['Phone Number', formdata.phonenumber],
                                ].map(([label, value]) => (
                                    <div key={label}><span>{label} :-</span><span> {value || null}</span></div>
                                ))}
                            </div>
                        </Col>

                        <Col md={8} style={{ color: 'var(--primary-bg)' }} className='ps-5'>
                            <h3 className='mb-4'>General Information</h3>
                            <Row>
                                {['email', 'username', 'firstname', 'businessname', 'phonenumber'].map(name => (
                                    <Col sm={6} key={name}>
                                        <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
                                        <Form.Control value={formdata[name]} name={name} onChange={handleChange}  disabled={name === 'email'}/>
                                    </Col>
                                ))}
                                 {selectFields.map(({ name, options, labelKey }) => (
                <Col sm={6} key={name}>
                  <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
                  <CustomSelect name={name} value={formdata[name]} options={options} labelKey={labelKey}
                    onChange={(n, val) => setformdata({ ...formdata, [n]: val })} placeholder={`Choose ${name}`} />
                </Col>
              ))}
                            </Row>
                        </Col>
                    </Row>
                    <div className='text-end'> <Button onClick={handleUpdate}>Update</Button> <Button onClick={handleCancel}> Cancle</Button></div>
                </Form>
            </Container>
            <UseEffectsFile />
            <SignupUseEffects />
        </>
    )
}
export default UserInfo