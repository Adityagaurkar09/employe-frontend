import React, {useEffect, useState} from 'react'
import axios from 'axios'
import EmployeeCard from '../../component/Employee'
import "./Home.css";
import icondataadd from '../../asset/dataadd.png'
import { Link } from 'react-router-dom';

function Home() {
  const [employee , setEmployee] =useState([]);

  const loadEmployee = async ()=>{
    const response = await axios.get("http://localhost:5002/employees")  
    
  setEmployee(response.data.data);
    
  }
useEffect (()=>{
  loadEmployee();
},[])
//[] empty dependency jb jb page load honga  tb tb  loadStudent function  call honga 

  return (
    <div> 
      <h1>employee App</h1>

      {
        employee.map((employee , index)=>{
          const {id,Name, salary} = employee;
          return (
            <EmployeeCard  key={index} id={id} Name={Name} salary={salary}/>
          )
        })
      }
      {
        employee.length === 0 && <h3>employee not found</h3>    
      }
        
        <Link to='/Add'>
       <img src={icondataadd} className='icon'></img>
       </Link>
      </div>
  
  )
}

export default Home

