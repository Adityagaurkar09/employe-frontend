import React, {useEffect, useState} from 'react'
import axios from 'axios'
import EmployeeCard from '../../component/Employee'
import "./Home.css";
import icondataadd from '../../asset/dataadd.png'
import { Link } from 'react-router-dom';

function Home() {
//   const [employee , setEmployee] =useState([]);

//   const loadEmployee = async ()=>{
//     const response = await axios.get("http://localhost:5002/employees")  
    
//   setEmployee(response.data.data);
    
//   }
// useEffect (()=>{
//   loadEmployee();
// },[])
//[] empty dependency jb jb page load honga  tb tb  loadStudent function  call honga 

const [employees, setEmployee] = useState([]);

    const loadEmployee = async () => {
      const response =  await axios.get("http://localhost:5002/employees")
      setEmployee(response.data.data);
      }
    useEffect(() => {
      loadEmployee();
    }, []);

  return (
    <div> 
      <h1 className='employee'>Employee App</h1>

      {/* {
        employees.map((employee,index)=>{
          return(
            <div>
              <h1>{employee.id}{employee.name}</h1>
              <p>{employee.salary}</p>
            </div>
          )
        })
      } */}
      

      {
        employees.map((employee , index)=>{
          const {id,name, salary} = employee;
          return (
            <EmployeeCard  key={index} id={id} name={name} salary={salary}/>
          )
        })
      }
      
       { employees.length === 0 && <h3>employee not found</h3> }
        
        <Link to='/Add'>
       <img src={icondataadd} className='icon'></img>
       </Link>
      </div>
  
  )

  
}

export default Home

