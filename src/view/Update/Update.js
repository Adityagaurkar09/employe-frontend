import React, { useState, useEffect } from 'react';
import "./Update.css";
import iconHome from '../../asset/home.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Update() {
  const [employee, setEmployee] = useState({
    id: "",
    Name: "",
    salary: ""
  });

  const { id } = useParams();

  const loadEmployeeDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5002/employees/${id}`);
      setEmployee(response.data.data);
    } catch (error) {
      toast.error("Failed to load employee details.");
    }
  };

  useEffect(() => {
    loadEmployeeDetail(id);
  }, [id]);

  const updateEmployee = async () => {
    try {
      const response = await axios.put(`http://localhost:5002/employees/${id}`, {
        name: employee.Name,
        salary: employee.salary
      });
      toast.success(response?.data?.message || "Employee updated successfully!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update employee.");
    }
  };

  return (
    <div className='employee-form'>
      <h1 className='employee'>Update Employee</h1>

      <input
        type='text'
        placeholder='ID'
        className='user-input'
        value={employee.id}
        disabled
      />

      <input
        type='text'
        placeholder='Name'
        className='user-input'
        value={employee.Name}
        onChange={(e) =>
          setEmployee({
            ...employee,
            name: e.target.value
          })}
      />

      <input
        type='text'
        placeholder='Salary'
        className='user-input'
        value={employee.salary}
        onChange={(e) =>
          setEmployee({
            ...employee,
            salary: e.target.value
          })}
      />

      <button
        type='button'
        className='btn'
        onClick={updateEmployee}
      >
        Update Employee
      </button>

      <Link to='/'>
        <img src={iconHome} className='icon' alt="Home" />
      </Link>

      <Toaster />
    </div>
  );
}

export default Update;
