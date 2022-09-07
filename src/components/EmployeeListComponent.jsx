import React, {useEffect, useState} from 'react';
import UpdateComponent from './UpdateComponent'
import { getEmployees } from '../service/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './components.css'

function EmployeeListComponent(props) {
    const [employees,setEmployees] = useState([]);
    const {employeeDataArray,setDataArray}= props;

    useEffect(() =>{
        localStorage.setItem("employeeDataArray",employeeDataArray)
        getEmployees().then(response => {
            const transformedData = response.data.data.map((employee)=>{
                return {
                  name:employee.name,
                  age: employee.age,
                  id: employee.id,
                  salary: employee.salary
             }
        })
            console.log("employee list comp")
            let employee = response.data.data
            setEmployees(employee)
            
            console.log(response);
            console.log(employee)
        })
    },[employees])
   
    const deleteHandler =(id)=>{
    const newEmployeeArray= employeeDataArray.filter(employee=>employee.id !== id)
    setDataArray(newEmployeeArray)
    }
  
  return (
    <>
    <Table striped bordered hover >
        <thead>
            <tr>
            <th>Employee Name</th>
            <th>Employee Age</th>
            <th>ID</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employeeDataArray.map((employee) =>(
            
            <tr>
                <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.id}</td>
            <td><Button variant="primary" onClick={()=>deleteHandler(employee.id)}>Delete</Button></td>
            </tr>
            
            ))}
        </tbody>
    </Table>
    <UpdateComponent employeeDataArray={employeeDataArray} setDataArray={setDataArray}/>
    </>
  )
}

export default EmployeeListComponent