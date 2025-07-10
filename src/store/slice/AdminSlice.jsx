import {createSlice} from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name:'admin',
    initialState:{
        sidebar:false,
        adminModalType:null,
        adminModalData:null,
        modelopen:null,
        userroles:[],
        statesdata:[],
        citiesdata:[],
        areadata:[],
        users:[],
        totalUserRoles:[],
        eventPlace:[]
    },
    reducers:{
        setSidebar:(state)=>{
            state.sidebar = !state.sidebar
        },
        openAdminModal:(state,actions)=>{
            state.adminModalType = actions.payload.type,
            state.adminModalData = actions.payload.data,
            state.modelopen=actions.payload.openmodel
        },
        closeAdminModal:(state)=>{
            state.adminModalData=null,
            state.adminModalType=null
            state.modelopen=null
        },
        Userrole:(state,actions)=>{
            state.userroles = actions.payload
        },
        setStatedata:(state,actions)=>{
            state.statesdata = actions.payload
        },
        setCitiesData:(state,actions)=>{
            state.citiesdata = actions.payload
        },
        setAreaData:(state,actions)=>{
            state.areadata = actions.payload
        },
        setUsers:(state,actions)=>{
            state.users = actions.payload
        },
        setUSerRoles:(state,actions)=>{
            state.totalUserRoles = actions.payload
        },
        setEventPlace:(state,actions)=>{
            state.eventPlace = actions.payload
        }
    }
})

export const {setSidebar,openAdminModal,closeAdminModal,Userrole,setStatedata,setCitiesData,setUsers,setUSerRoles,setEventPlace,setAreaData} = AdminSlice.actions
export default AdminSlice.reducer