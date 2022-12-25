import React from 'react'
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';


export default function Proflile() {
    const[profile,setProfile]=useState([])
    const Email=localStorage.getItem('Email')
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const loadHome=()=>{
      navigate('/home')
    }
    const handleSubmit=()=>{
   
      const item={
         Admin_Id: 2,
          Name: "partha",
          User_Type:"Admin",
          Email: Email,
          Password:password
      } 
     console.warn(item)
    axios.post('https://localhost:44328/api/adminss/update',item)
    .then((result)=>{
      alert(result.data);
      loadHome();
    })
    .catch((err)=>{
      alert(err);
  
    
      
    })
  
  }

  return (
    <div>
      <div className='reg'>
      <Form >   
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email'  value={Email} disabled placeholder='Enter your email'  disable />
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='text' name='Description'  placeholder='Password' required onChange={ (e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <br/>
   
            <div className='log'>
            <a onClick={handleSubmit} className='btn btn-success'>Update</a>
            </div>
           
            
        </Form.Group>

    </Form>
      </div>
    </div>
  )
}
