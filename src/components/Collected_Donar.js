import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import { useParams } from 'react-router-dom'
export default function Collected() {
    const {id}=useParams();
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    

   



const handleFilter=(e)=>{
    if(e.target.value==''){
        setDoctors(searchData)
    }
    else{
      const filterResult=  searchData.filter(item=>item.Specaility.toLowerCase().includes(e.target.value.toLowerCase()))
        setDoctors(filterResult)
    }
    setFilterVal(e.target.value)

}




useEffect(() => {
    fetch("https://localhost:44328/api/CollectedDonar")
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
                <h2>Donar List </h2>
                
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Name</td>
                            <td>Blood_group</td>
                            <td>Phone</td>
                            <td>Status</td>
                       

                        </tr>

                    </thead>
                    <tbody>
                        { doctors &&
                            doctors.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Blood_group}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Status}</td>
                                    
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
