import React, { useEffect, useState } from 'react'
import "./Details.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';
//path parameter pass kiya gaya hai us ke lie usePrams ka use kiya hai

function Details() {

  const [employee , setEmployee] = useState();

  const {id} = useParams();
  
  const loadEmployeeDetail = async(id)=>{
    const response = await axios.get(`http://localhost:5002/employees/${id}`)
    setEmployee(response.data.data)

  }
  useEffect(()=>{
    loadEmployeeDetail(id)
  },[id])
  return (
    <div>
        <h1 className='employee-head'>Employee Detail</h1>
       <div className='employee-detail'>
        <h2>name = {employee?.name}</h2>
        <h2>id = {employee?.id}</h2>
        <h2>salary = {employee?.salary}</h2>
       </div>
    </div>
  )
}

export default Details