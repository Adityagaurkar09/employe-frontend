import React from 'react'
import "./Employee.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function EmployeeCard({ id,name}) {
  const navigate = useNavigate();

  const deletStudent = async(id)=>{
    const response = await axios.delete(`http://localhost:5002/employees/${id}`)
     window.location.reload();
  }
  return (
 
    <div className='card'
     onClick={(e) => {
          
          navigate(`/Detail/${id}`);
          
         }}>
        <h3 className='name'>{name}</h3>
        <div className='detail'>
            <span> no: {id}</span>
            
        </div>

        <span>
        <button type='button'
         className=' Delet-btn'
         onClick={(e) => {
          e.stopPropagation();
          deletStudent(id);
          
         }}
        >Delet</button>
        </span>

        <span>
        <button type='button'
         className=' edit-btn'
         onClick={(e) => {
          e.stopPropagation();
          navigate(`/edit/${id}`)
          
         }}
        >Edit</button>
        </span>
    </div>
  )
}

export default EmployeeCard