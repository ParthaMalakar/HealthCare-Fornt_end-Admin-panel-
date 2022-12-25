import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';

export default function Feadback () {
    const [Notice,setNotices]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    const Email=localStorage.getItem('Email')



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
    fetch("https://localhost:44328/api/Report/send/parthamalakar667@gmail")
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
              <h2>Report Send by Admin</h2>
          
             
          </div>
          <div className='card-body'>
              <table className='table table-borderd'>
                  <thead className='bg-dark text-white'>
                      <tr>
                          <td>Report No</td>
                          <td>Receiver</td>
                          <td>Title</td>
                          <td>Description</td>
                          <td>Report_Time</td>
                          <td>Status</td>


                      </tr>

                  </thead>
                  <tbody>
                      { Notice &&
                          Notice.map(item=>(
                              <tr key={item.ReportId}>
                                  <td>{item.ReportId}</td>
                                  <td>{item.Receiver}</td>
                                  <td>{item.Title}</td>
                                  <td>{item.Description}</td>
                                  <td>{item.Report_Time}</td>
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
