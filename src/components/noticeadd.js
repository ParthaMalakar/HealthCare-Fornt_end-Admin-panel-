import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
export default function Notice() {
const navigate=useNavigate();
const [Subject, setSubject] = useState('');
const [Description, setDescription] = useState('');
const [Issue_time, setIssue_time] = useState('');
const [Due_time, setDue_time] = useState('');



const handleSubmit=()=>{
   
    const item={
        Subject: Subject,
        Description: Description,
        Issue_time: Issue_time,
        Due_time: Due_time,
        Status : "new"
   
    }


    
 
   console.warn(item)
  axios.post('https://localhost:44328/api/Notice/create',item)
  .then((result)=>{
    alert(result.data);
    
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
            <Form.Control type='text' name='Subject' placeholder='Subject' required onChange={ (e)=>setSubject(e.target.value)} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control type='text' name='Description'  placeholder='Description' required onChange={ (e)=>setDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Issue_time:</Form.Label>
            <Form.Control type='date' name='Issue_time' placeholder='Issue_time' required onChange={  (e)=>setIssue_time(e.target.value)} />
        </Form.Group> 
        <Form.Group>
            <Form.Label>setDue_time:</Form.Label>
            <Form.Control type='date' name='setDue_time' placeholder='setDue_time' required onChange={  (e)=>setDue_time(e.target.value)} />
        </Form.Group>
        <Form.Group>
            <br/>
   
            <div className='log'>
            <a onClick={handleSubmit} className='btn btn-success'>Add Notice</a>

            </div>
           
            
        </Form.Group>

    </Form>

    
  </div>
  )
}
