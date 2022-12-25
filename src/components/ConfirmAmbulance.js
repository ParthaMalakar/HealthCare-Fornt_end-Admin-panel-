import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';

export default function Ambulance () {
    const [ambulance,setAmbulance]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    


// const loadAppointment=(Id)=>{
    
//     navigate('/appointment/'+Id)

// }

const loadDetail=(Hid)=>{
    navigate('/details/'+Hid)
 
}


const bookAmb=(item)=>{
   if (item.Status =="Confirm") {
    alert('It is already Confirm')
   }
   else{

    const data={
        Id:item.Id,
        Driver_Name:item.Driver_Name,
        Phone:item.Phone,
        Rent:item.Rent,
        Status:"Confirm",
        Hid:item.Hid,
        Pid:item.Pid,
        Location:item.Location



    }
    
    axios.post('https://localhost:44328/api/Ambulance/update',data)
        .then((result)=>{
          alert(result)
          document.getElementById('bkamb').innerHTML="Confirm"
        })
        .catch((err)=>{
          alert(err);
      
        
          
        })
    
   }
 
}
const handleFilter=(e)=>{
    if(e.target.value==''){
        setAmbulance(searchData)
    }
    else{
      const filterResult=  searchData.filter(item=>item.Location.toLowerCase().includes(e.target.value.toLowerCase()))
        setAmbulance(filterResult)
    }
    setFilterVal(e.target.value)

}




useEffect(() => {
    fetch("https://localhost:44328/api/A/Ambulances",{
    headers:{
            Authorization:localStorage.getItem('token')
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    {
        setAmbulance(data)
        setData(data)
        console.log(data);

    })
    .catch((err)=>{
        console.log(err.message);
    })
   
}, []);

  return (
    <div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Ambulances </h2>
                <div>
                <input type='search' placeholder='Search Ambulance' onInput={(e)=>handleFilter(e)} />
                </div>
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Driver Name</td>
                            <td>Phone</td>
                            <td>Rent</td>
                            <td>Loaction</td>
                            <td>Status</td>
                            <td>Action</td>

                        </tr>

                    </thead>
                    <tbody>
                        { ambulance &&
                            ambulance.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Driver_Name}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Rent}</td>
                                    <td>{item.Location}</td>
                                    <td>{item.Status}</td>
                                    <td>
                                    <a onClick={()=>{loadDetail(item.Hid)}} className='btn btn-primary'>Details</a>
                                    <a id='bkamb' onClick={()=>bookAmb(item)} className='btn btn-success'>Confirm </a>
                                    {/* <a  onClick={()=>cancelAmb(item)} className='btn btn-danger'>Cancel </a> */}
                                    
                                   
                                    </td>
                                </tr>
                                
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
    </div>
  )
}
