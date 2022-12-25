import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import Feadback from './components/Notice';
import fileDownload from 'js-file-download';

export default function Home() {
  const navigate=useNavigate();
  const [pid,setId]=useState('')
  // localStorage.setItem('token',"dasfadsfo")
  const x=(localStorage.getItem('token') !=null)
  const loadLogin=()=>{
    navigate('/')
}
 


useEffect(() => {
  var id=localStorage.getItem('Email')
  
  let xid=id.slice(0,- 4)
  console.log(xid);
  axios.get('https://localhost:44328/api/Admin/byemail/'+xid)
  .then(res=>{
    setId(res.data)
    localStorage.setItem('pid',res.data)
  })
  .catch(err=>{
    alert(err)
  })

}, []);






useEffect(() => {
  
  if(x==false){
    return loadLogin()
  }
}, []);
  

  const loadDoctors=()=>{
    
    navigate('/doctors')
  
  }
  const loadProfile=()=>{
    
    navigate('/profile')
  
  }
  const loadBloodBanks=()=>{
    
    navigate('/bloodbanks')
  
  }
  const loadAmbulances=()=>{
    
    navigate('/ambulances')
  
  }
  const loadBookedAmbulances=()=>{
    
    navigate('/ambulances/booked')
  
  }
  const loadPrescriptions=(pid)=>{
    
    navigate('/prescriptions/'+pid)
  
  }

  const loadAppointments=(pid)=>{
    
    navigate('/appointments/'+pid)
  
  }
  const loadnotice=()=>{
    
    navigate('/notice/')
  
  }
  const loadDownload=()=>{
    
    navigate('/download/')
  
  }
  const loadPatient=()=>{
    
    navigate('/patient/')
  
  }
  const loadBlood=()=>{
    
    navigate('/blood/')
  
  }
  const loadCollectedDo=()=>{
    
    navigate('/collected/')
  
  }
  const loadVerify=()=>{
    
    navigate('/verify/')
  
  }
  const loadLogout=()=>{
    
    navigate('/logout')
  
  }
  
  return (
    <div>
        <h1>Dashboard For Admin Panel</h1>
        <a onClick={()=>{loadAppointments(pid)}} className='btn btn-success'>Hospital Information</a>

        <a onClick={()=>{loadDoctors()}} className='btn btn-success'>Information Doctors</a>
        <a onClick={()=>{loadBloodBanks()}} className='btn btn-success'>Find Blood</a>
        <a onClick={()=>{loadAmbulances()}} className='btn btn-success'>Confirm Ambulances</a>
        <a onClick={()=>{loadnotice()}} className='btn btn-success'>ADD Notice</a>
        <a onClick={()=>{loadPatient()}} className='btn btn-success'>patient Information</a>
        <a a onClick={()=>{loadDownload()}}  className='btn btn-success'>AppointmentListDownload</a>
        <a onClick={()=>{loadBlood()}} className='btn btn-success'>Assign Donar</a>
        <a onClick={()=>{loadCollectedDo()}} className='btn btn-success'>BloodGivenDonarList </a>
        <a onClick={()=>{loadVerify(pid)}} className='btn btn-success'>VeificationForUpdateProfile </a>
        <a onClick={()=>{loadnotice()}} className='btn btn-success'>ADD Notice</a>
        <a onClick={()=>{loadLogout(pid)}} className='btn btn-success'>Logout</a>
       <div className='reg'>
       
       </div>
       <Feadback/>
    </div>
  )
}
