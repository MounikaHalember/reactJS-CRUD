import React,{useState,useEffect, useCallback} from 'react';
import Button from 'react-bootstrap/Button';
import EmployeeListComponent from './EmployeeListComponent';
import { addEmployeeToList, getEmployees,updateEmployee} from '../service/apiService';
import './components.css';


function CreateEmployeeComponent() {

  const [employeeData,setData] =useState({name:"",age:"",id:"",salary:99908});
  const [employeeDataArray,setDataArray] =useState([]);
  // useEffect(()=>{
  //   getEmployees().then((response)=>{
      
  //   })
  // },[])
  const onNameHandler = (e) => {
      const tempObj = {...employeeData,
        name:e.target.value
      }
      setData(tempObj)
  }
  const onAgeHandler = (e) => {
    const tempObj = {...employeeData,
      age:e.target.value
    }
    setData(tempObj)
}
  const createEmployee = async() => {
 const response = await addEmployeeToList(employeeData)  
  console.log(response);
  let tempArray = [...employeeDataArray]
    tempArray.push( response.data.data);

    setDataArray(tempArray)
  }


 
useEffect(() => {
   createEmployee()
    
  },[createEmployee])

  console.log(employeeDataArray);
 
  return (
    <div>
    <div className="createContainer">
      <div>
        <span>Employee Name: </span><input type="text" value={employeeData.name} onChange = {(e) => {onNameHandler(e)}}/>
      </div>
      <div>
        <span>Employee Age: </span><input type="number"value={employeeData.age} onChange = {(e) => {onAgeHandler(e)}}/><br></br>
     </div>
     <Button variant="primary" onClick = {createEmployee} className="addBtn">Add Employee</Button>
    </div>
    <EmployeeListComponent employeeDataArray={employeeDataArray} setDataArray={setDataArray}/>
    </div>
  )
}

export default CreateEmployeeComponent