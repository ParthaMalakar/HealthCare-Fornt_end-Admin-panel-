import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';

export default function Feadback () {
    const [Notice,setNotices]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    



const handleFilter=(e)=>{
    if(e.target.value==''){
      setNotices(searchData)
    }
    else{
      const filterResult=  searchData.filter(item=>item.Specaility.toLowerCase().includes(e.target.value.toLowerCase()))
      setNotices(filterResult)
    }
    setFilterVal(e.target.value)

}




useEffect(() => {
    fetch("https://localhost:44328/api/Notice/get/all")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    {
        setNotices(data)
        setData(data)
        console.log(data);

    })
    .catch((err)=>{
        console.log(err.message);
    })
   
}, []);


  const loadDetail=()=>{
      alert('asdkf')
  }

return (
  
<div className='container'>
      
      <div className='card'>
          <div className='card-title'>
              <h2>ALL Notice Supplied by Admin</h2>
          
             
          </div>
          <div className='card-body'>
              <table className='table table-borderd'>
                  <thead className='bg-dark text-white'>
                      <tr>
                          <td>Notice No</td>
                          <td>Subject</td>
                          <td>Description</td>
                          <td>Issue_time</td>
                          <td>Due_time</td>
                       


                      </tr>

                  </thead>
                  <tbody>
                      { Notice &&
                          Notice.map(item=>(
                              <tr key={item.Id}>
                                  <td>{item.Notice_Id}</td>
                                  <td>{item.Subject}</td>
                                  <td>{item.Description}</td>
                                  <td>{item.Issue_time}</td>
                                  <td>{item.Due_time}</td>
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
