import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';

export default function Doctors () {
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    


const loadRepsend=()=>{
    
    navigate('/repsend/')

}
const loadRepAdd=()=>{
    
    navigate('/repsend/add')

}
const loadReprec=()=>{
    
    navigate('/reprec/')

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

  return (
    <div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Report Information</h2>
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                   
                    <tbody>
                        <tr>
                                    <td>
                                    <a onClick={()=>{loadRepsend()}} className='btn btn-success'>Report Send</a>
                                    </td>
                                    <td>
                                    <a onClick={()=>{loadReprec()}} className='btn btn-success'>Report Recived</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <a onClick={()=>{loadRepAdd()}} className='btn btn-success'>Add Report</a>
                                    </td>
                                </tr>
                            
                        

                    </tbody>

                </table>

            </div>
        </div>
    </div>
  )
}
