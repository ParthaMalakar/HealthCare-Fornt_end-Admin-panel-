import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';

export default function MakeAppointment() {
    const {id}=useParams();
    const [Appointments,setAppointments]=  useState(null);
    useEffect(() => {
    
      fetch("https://localhost:44328/api/Appointments/doctor/" +id)
        
      
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
      
      
  
    
    }, []);


    const loadDetail=()=>{
        alert('asdkf')
    }

  return (
    
<div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Appointments History</h2>
            
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Appointment No</td>
                            <td>Paitent Name</td>
                            <td>Patient Age</td>
                            <td>Appointment Date</td>
                         


                        </tr>

                    </thead>
                    <tbody>
                        { Appointments &&
                            Appointments.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.P_Age}</td>
                                    <td>{item.AppointmentDate}</td>
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
