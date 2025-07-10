
   

export const getFormObj = (formdata, handleChange,groups,countries,state,filteredCategories,locations,) => ([
    { label: 'First Name',name:'firstname', value: formdata.firstname, md: 6, type: 'text', onChange: handleChange ,user:'common'},
     { label: 'Last Name',name:'lastname', value: formdata.lastname, md: 6, type: 'text', onChange: handleChange ,user:'cust'},
    { label: 'Middle Name',name:'middlename', value: formdata.middlename, md: 12, type: 'text', onChange: handleChange ,user:'cust'},
     { label:'Username',name:'username',value:formdata.username,md:6,type:'text',onChange: handleChange,user:'common'},
     { label: 'Business Name',name:'businessname', value: formdata.businessname, md: 12, type: 'text', onChange: handleChange ,user:'vendor'},
     { label: 'Email',name:'email', value: formdata.email, md: 6, type: 'email', onChange: handleChange ,user:'common'},
     { label: 'Password',name:'password', value: formdata.password, md: 6, type: 'password', onChange: handleChange ,user:'common'},
     { label: 'Phone Number',name:'phonenumber', value: formdata.phonenumber, md: 6, type: 'tel', onChange: handleChange ,user:'common'},

    //Date Fields
   { label: 'Event Date', name:'eventdate',value: formdata.eventdate, md: 6, type: 'date', onChange: handleChange ,user:'cust'},
   
    //select
     { label: 'Event Location',name:'locationName', value: formdata.locationName, md: 6, type: 'select', options: locations.map((location)=>({value:location._id,label:location.locationName})), onChange: handleChange,user:'common' },
      { label: 'State',name:'state', value: formdata.state, md: 6, type: 'select', options:state.map((s)=>({value:s._id,label:s.sname})), onChange: handleChange ,user:'common'},
     { label: 'Country',name:'country', value: formdata.country, md: 6, type: 'select', options:countries.map((c)=>({value:c._id,label:c.countryname})), onChange: handleChange ,user:'common'},
   
   
     { label: 'Business Type',name:'businessgroup', value: formdata.businessgroup, md: 6, type: 'select',
           options: Array.isArray(groups) ? groups.map((g) => ({ value: g._id, label: g.gname })) : [],
           onChange: handleChange,user:'vendor' },
     { label: 'Business Category',name:'businesscategory', value: formdata.businesscategory, md: 6, type: 'select', options: Array.isArray(filteredCategories)?filteredCategories.map((c)=>({value:c._id,label: c.cname})):[], onChange: handleChange,user:'vendor',disabled: !formdata.businessgroup },
])

export const getLoginObj = (logindata,handleLoginChange)=>([
     { label: 'Email',name:'email', value: logindata.email, md: 12, type: 'email', onChange: handleLoginChange },
     { label: 'Password',name:'password', value: logindata.password, md: 12, type: 'password', onChange: handleLoginChange },
    ])
    