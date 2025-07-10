import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import SignupUseEffects from '../Modals/SignupUseEffects';
import UseEffectsFile from './UseEffectsFile';
import { useEffect } from 'react';


const AdminChart = () => {
    const users = useSelector((state)=>state.admin.users)
    const groups = useSelector(state => state.usertype.grouptype);
  const categories = useSelector(state => state.usertype.categorytype);
  const countries = useSelector(state => state.usertype.country);
  const states = useSelector((state)=>state.admin.statesdata)
  const cities = useSelector((state)=>state.admin.citiesdata)
  
  const totalVender = users.filter((u)=>u.usertype?.userrole  === 'vendor').length || 0;
  const totalCustomer = users.filter((u)=>u.usertype?.userrole === 'customer').length || 0;
  const userRoles = useSelector((state)=>state.admin.totalUserRoles)
  
  const series = [totalVender,totalCustomer,groups.length,categories.length,countries.length,states.length,cities.length,userRoles.length,users.length]

 
  // const labels = ['Vender','Customer','Groups','Categories','Countries','States','Cities','Userroles','Users']
  const labels = [
  `Vender (${totalVender})`,
  `Customer (${totalCustomer})`,
  `Groups (${groups.length})`,
  `Categories (${categories.length})`,
  `Countries (${countries.length})`,
  `States (${states.length})`,
  `Cities (${cities.length})`,
  `Userroles (${userRoles.length})`,
  `Users (${users.length})`
];
console.log(series)
 useEffect(()=>{

  },[users,groups,totalVender])
  const options = {
    chart: {
      type: 'polarArea',
    },
    labels: labels,
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
     dataLabels: {
        enabled: true,
      },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }],


  };
  return (
     <div>
      {series.every(val => val === 0) ? (
      <div>No chart data available.</div>
    ) : (
      <ReactApexChart  key={series.join('-')} options={options} series={series} type="polarArea" height={500} width={800} />
    )}
      {/* <ReactApexChart options={options} series={series} type="polarArea" height={500} width={800}/> */}
      <SignupUseEffects/>
      <UseEffectsFile/>
    </div>
  )
}

export default AdminChart