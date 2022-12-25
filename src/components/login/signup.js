import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import Login from './login';
export default function Register() {
const navigate=useNavigate();
const [Name, setName] = useState('');
const [Email, setEmail] = useState('');
const [password, setPassword] = useState('');


const loadLogin=()=>{
    navigate('/')
}


const handleSubmit=()=>{
   
    const item={
        Name: Name,
        Status: "New",
        User_Type: "Admin",
        password: password,
        Email: Email
    }


    
 
   console.warn(item)
  axios.post('https://localhost:44328/api/admin/add',item)
  .then((result)=>{
    alert(result.data);
    if (result.data!=null){
      loadLogin()
    }
  })
  .catch((err)=>{
    alert(err);

  
    
  })

}

  return (
    <div className='reg'>
    <Form >
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type='text' name='name' placeholder='Enter your name' required onChange={ (e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email'  placeholder='Enter your email' required onChange={ (e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' name='password' placeholder='Enter password' required onChange={  (e)=>setPassword(e.target.value)} />
        </Form.Group> 
        <Form.Group>
            <br/>
   
            <div className='log'>
            <a onClick={handleSubmit} className='btn btn-success'>SignUp</a>
            
            <a onClick={loadLogin} > <u>Already have an account ?</u></a>

            </div>
           
            
        </Form.Group>

    </Form>

    
  </div>
  )
}
