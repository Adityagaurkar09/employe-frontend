import React, { useState,useEffect } from 'react'
import "./Update.css"
import iconHome from '../../asset/home.png'
import { Link,useParams  } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function Update() {
 
  const [employee , setEmployee] = useState({
    id:"",
    name:"",
    salary:""
  });

  const {id} = useParams();

  const loadEmployeeDetail = async(id)=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/employee/${id}`)
    setEmployee(response.data.data)
  };

  useEffect(()=>{
    loadEmployeeDetail(id)
  },[id])

  const updateEmployee = async()=>{
    try
    {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/students/${id}`,{
      name: employee.name,
      salary:employee.salary
      
    });

    toast.success(response?.data?.message);
  }catch (error){
    toast.error(error?.data?.message);
   
  }
  };
 
  return (
    <div className='employee-form'>
        <h1 className='employee'>update Student</h1>

        <input type='text' 
        placeholder='id' 
        className='user-input' 
        value={employee.id} 
        onChange={(e)=>
          setEmployee({
          ...employee,
          id:e.target.value
        })}
        disabled/>
        

        <input type='text' 
        placeholder='Name'
        className='user-input'
        value={employee.name} 
        onChange={(e)=>
          setEmployee({
            ...employee,
            name:e.target.value
          })}/>
        

        <input type='text' 
        placeholder='salary'
        className='user-input'
        value={employee.salary} 
        onChange={(e)=>
          setEmployee({
            ...employee,
            city:e.target.value
          })}/>
        
        
        <button type='button'
         className='btn'
         onClick={()=>{
          updateEmployee();
         }}
        >Update employee</button>
       
       <Link to='/'>
        <img src={iconHome} className='icon'/>
        </Link>

        <Toaster/>
    </div>

   
  )
}

export default Update