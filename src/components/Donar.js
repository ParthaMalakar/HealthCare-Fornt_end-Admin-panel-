import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import { useParams } from 'react-router-dom'
export default function Donar() {
    const {id}=useParams();
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    

    const bookAmb=(item)=>{
        if (item.Status =="Collected") {
         alert('It is already Given')
        }
        else{
     
         const data={
             Id:item.Id,
             Name:item.Name,
             Blood_group:item.Blood_group,
             Phone:item.Phone,
             Bid:item.Bid,
             Status:"Collected"
                 
         }
         
         axios.post("https://localhost:44328/api/donar/Assign/1/3")
             .then((result)=>{
               alert(result)
               document.getElementById('bkamb').innerHTML="Assign"
             })
             .catch((err)=>{
               alert(err);
           
             
               
             })
         
        }
      
     }



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
    fetch("https://localhost:44328/api/AvailableDONAR")
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
                <h2>DOnar Info</h2>
                
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Name</td>
                            <td>Blood_group</td>
                            <td>Phone</td>
                            <td>Status</td>
                            <td>Action</td>

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
                                    <td>
                                    <a id='bkamb' onClick={()=>bookAmb(item)} className='btn btn-success'>Assign </a>
                                    
                                    </td>
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
