import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
export default function Paitent () {
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    


const loadUnblook=(Id)=>{
    
    navigate('/unblock/')

}

const loadDetail=(Hid)=>{
    navigate('/details/'+Hid)
    
}
const bookAmb=(item)=>{
    if (item.Status =="Block") {
     alert('It is already Block')
    }
    else{
 
     const data={
         Id:item.Id,
         Name:item.Name,
         Age:item.Age,
         phone:item.phone,
         Status:"Block",
         password:item.password,
         Email:item.Email,
        
     }
     
     axios.post('https://localhost:44328/api/Patient/update',data)
         .then((result)=>{
           alert(result)
           document.getElementById('bkamb').innerHTML="Block"
         })
         .catch((err)=>{
           alert(err);
       
         
           
         })
     
    }
  
    
   

}
const handleFilter=(e)=>{
    if(e.target.value==''){
        setDoctors(searchData)
    }
    else{
      const filterResult=  searchData.filter(item=>item.Specaility.toLowerCase().includes(e.target.value.toLowerCase()))
        setDoctors(filterResult)
    }
    setFilterVal(e.target.value)

}




useEffect(() => {
    fetch("https://localhost:44328/api/ActivePatients")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    {
        setDoctors(data)
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
                <h2>Patient Information</h2>
                <div>
                <input type='search' placeholder='Search patient' onInput={(e)=>handleFilter(e)} />
                </div>
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Patient Name</td>
                            <td>Age</td>
                            <td>phone</td>
                            <td>Status</td>
                            <td>password</td>
                            <td>Email</td>
                            <td>Action</td>

                        </tr>

                    </thead>
                    <tbody>
                        { doctors &&
                            doctors.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.Status}
                                    </td>
                                    <td>{item.password}</td>
                                    <td>{item.Email}</td>
                                    
                                    <td>
                                    <a onClick={()=>{loadDetail(item.Hid)}} className='btn btn-primary'>Details</a>
                                    <a id='bkamb' onClick={()=>bookAmb(item)} className='btn btn-success'>Block </a>
                                    
                                    </td>
                                </tr>
                                
                            ))
                        }

                    </tbody>

                </table>
                <a onClick={()=>{loadUnblook()}} className='btn btn-success'>BlockList</a>
            </div>
          
        </div>
       
    </div>
  )
                    }
