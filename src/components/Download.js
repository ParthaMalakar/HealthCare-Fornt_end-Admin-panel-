import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';
import axios from "axios";
import { CSVLink } from "react-csv";
import Appointment from './Appointment';

export default function Download() {
    
    const [appointment,setAppointment]=  useState([]);
    useEffect(() => {
      loadlist();
      },[]);
  
      const loadlist = async () => {
const result = await axios.get("https://localhost:44328/api/Appointmentslist");
setAppointment(result.data.reverse());

      }

    const loadDetail=()=>{
        alert('asdkf')
    }

  return (
    
<div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Appointments Details</h2>
                <CSVLink data={appointment} onclick={() => {}} style={{marginLeft:"1000px"}}>Download</CSVLink>
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Patient Name</td>
                            <td>Patient Age</td>
                            <td>Patient Status</td>
                            {/* <td>Hospital Name</td> */}
                            <td>AppointmentDate</td>
                            <td>Appointment No</td>
                            <td>Doctor Name</td>
                            <td>Doctor Specaility</td>
                            <td>Doctor Email</td> 
                            <td>Patient_Email</td>


                        </tr>

                    </thead>
                    <tbody>
                        { appointment &&
                            appointment.map(item=>(
                                <tr key={item.Name}>
                                    <td>{item.Name}</td>
                                    <td>{item.P_Age}</td>
                                    <td>{item.Status}</td>
                                    <td>{item.AppointmentDate}</td>
                                    <td>{item.DName}</td>
                                    <td>{item.Dsepciality}</td><td>{item.Id}</td>
                                    <td>{item.DEmail}</td>
                                    <td>{item.PEmail}</td>
                                    
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
