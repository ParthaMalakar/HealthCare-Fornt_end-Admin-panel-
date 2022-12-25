import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';

export default function AvaiableAmbulances() {
    const {id}=useParams();
    const [Appointments,setAppointments]= useState(null);
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    useEffect(() => {
    
      fetch("https://localhost:44328/api/Ambulances")
        
      
      .then((res)=>{
          return res.json()
      })
  
      .then((data)=>
      {
          setAppointments(data)
          console.log(data);
  
      })
      .catch((err)=>{
          console.log(err.message);
      })
      
      
  
    
    },[]);
  return (

    <div className='container'>
        
    <div className='card'>
        <div className='card-title'>
            <h2>Ambulance</h2>
            <div>
           
            </div>
           
        </div>
        <div className='card-body'>
            <table className='table table-borderd'>
                <thead className='bg-dark text-white'>
                    <tr>
                            <td>Driver_Name</td>
                            <td>Phone</td>                          
                            <td>Rent</td>
                            <td>Status</td>
                            <td>Location</td>
                          

                    </tr>

                </thead>
                <tbody>
                    { Appointments &&
                      Appointments.map(item=>(
                            <tr key={item.Id}>
                                    <td>{item.Driver_Name}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Rent}</td>
                                    <td>{item.Status}</td>
                                    <td>{item.Location}</td>
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
