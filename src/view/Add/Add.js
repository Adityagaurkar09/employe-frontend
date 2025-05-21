import React, { useState } from 'react'
import "./Add.css"
import iconHome from '../../asset/home.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function Add() {
 
  const [id , setId] = useState('');
  const [Name , setName] = useState('');
  const [salary , setSalary] = useState('');

  const addStudent = async()=>{
    try
    {
    const response = await axios.post("http://localhost:5002/employees",{
      id : id,
      Name: Name
      
    })

    setId("");
    setName("");
    setSalary("");

    toast.success(response?.data?.message);
  }catch (error){
    toast.error(error?.data?.message);
   
  }
  };
 
  return (
    <div className='student-form'>
        <h1>Add Student</h1>

        <input type='text' 
        placeholder='id' 
        className='user-input' 
        value={id} 
        onChange={(e)=>setId(e.target.value)}/>
        

        <input type='text' 
        placeholder='Name'
        className='user-input'
        value={Name} 
        onChange={(e)=>setName(e.target.value)}/>
        

        <input type='text' 
        placeholder='city'
        className='user-input'
        value={salary} 
        onChange={(e)=>setSalary(e.target.value)}/>
        
        
        <button type='button'
         className='btn'
         onClick={()=>{
          addStudent();
         }}
        >add student</button>
       
       <Link to='/'>
        <img src={iconHome} className='icon'/>
        </Link>

        <Toaster/>
    </div>

   
  )
}

export default Add