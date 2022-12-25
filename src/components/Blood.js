import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';

export default function Blood() {
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    


const loadDonar=(Id)=>{
    
    navigate('/donar/'+Id)

}

const loadDetail=(Hid)=>{
    navigate('/details/'+Hid)
    
    
   

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
    fetch("https://localhost:44328/api/bloodbanks")
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
                <h2>BloodBank Info</h2>
                
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>BGroup</td>
                            <td>collection_Date</td>
                            <td>Quantity</td>
                            <td>Status</td>
                            <td>Action</td>

                        </tr>

                    </thead>
                    <tbody>
                        { doctors &&
                            doctors.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.BGroup}</td>
                                    <td>{item.collection_Date}</td>
                                    <td>{item.Quantity}</td>
                                    <td>{item.Status}
                                    </td>
                                    <td>
                                    <a onClick={()=>{loadDonar(item.Id)}} className='btn btn-success'>Assign Donar</a>
                                    
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
