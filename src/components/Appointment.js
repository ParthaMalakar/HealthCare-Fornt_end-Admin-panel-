import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Appointment() {
    const {pid}=useParams();
    const [appointment,setAppointment]=  useState(null);
    const navigate=useNavigate();
    useEffect(() => {
    
      fetch("https://localhost:44328/api/hospitals")
        
      
      .then((res)=>{
          return res.json()
      })
  
      .then((data)=>
      {
          setAppointment(data)
          console.log(data);
  
      })
      .catch((err)=>{
          console.log(err.message);
      })
      
      
  
    
    }, []);


    const loadDetail=()=>{
        alert('asdkf')
    }
    const loadavaiilbedoctor=(Id)=>{
        navigate('/availabledoc/'+Id)
    }
    const loadavaiilbepatient=(Id)=>{
        navigate('/availablepat/'+Id)
    }
  return (
    
<div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Hospital Information</h2>
            
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                     
                            <td>Hospital Name</td>
                            <td>Location</td>
                            {/* <td>Hospital Name</td> */}
                            <td>Action</td>


                        </tr>

                    </thead>
                    <tbody>
                        { appointment &&
                            appointment.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Location}</td>
                                    <td>
                                    <a onClick={()=>{loadavaiilbepatient(item.Id)}} className='btn btn-primary'>Ambulance Under Hospital</a>
                                    <a onClick={()=>{loadavaiilbedoctor(item.Id)}} className='btn btn-primary'>Doctor Under Hospital</a>
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
