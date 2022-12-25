import React from 'react'
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';


export default function Verify() {
    const[profile,setProfile]=useState([])
    const Email=localStorage.getItem('Email')
    const navigate=useNavigate();
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    
    const loadLogin=()=>{
        navigate('/')
    }
    const loadConfarmation=()=>{
    
        navigate('/confirmmail/')
    
    }
    const handleSubmit=()=>{
   
        const item={
            Email: Email,
            Code: ""
        } 
       console.warn(item)
      axios.post('https://localhost:44328/api/deltebyadmin/verification/create',item)
      .then((result)=>{
        alert(result.data);
        
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
            <br/>
   
            <div className='log'>
            <a onClick={handleSubmit} className='btn btn-success'>Send Code</a>
            <a onClick={()=>{loadConfarmation(Email)}} className='btn btn-success'>ClickForConfirm</a>

            </div>
           
            
        </Form.Group>

    </Form>
      </div>
    </div>
  )
}
