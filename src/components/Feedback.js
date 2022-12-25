import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import { useParams } from 'react-router-dom'
export default function Feadback() {
    const {id}=useParams();
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])

useEffect(() => {
    fetch("https://localhost:44328/api/Patients/feedback")
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
                <h2>Feadback Or Compline Given by Patient </h2>
                
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>NO</td>
                            <td>Email</td>
                            <td>Feadback</td>
                            
                       

                        </tr>

                    </thead>
                    <tbody>
                        { doctors &&
                            doctors.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Id}</td>
                                    <td>{item.Email}</td> 
                                    <td>{item.Feedback}</td>     
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
