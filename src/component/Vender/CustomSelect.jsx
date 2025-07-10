import { Form } from "react-bootstrap"

const CustomSelect = ({name,value,options,labelKey = 'name',onChange,placeholder='Choose options'}) => {
     const handleSelect = (e) => {
    const selected = options.find(opt => opt._id === e.target.value)
    onChange(name, selected)
  }
  return (
    <Form.Select name={name} value={value?._id || ''} onChange={handleSelect}>
         <option value="">{placeholder}</option>
         {
            options.map((opt)=>(
                <option key={opt._id} value={opt._id}>
          {opt[labelKey] || '--'}
          {/* {opt?.[labelKey]?.trim?.() || '--'} */}

        </option>
            ))
         }
    </Form.Select>
  )
}

export default CustomSelect