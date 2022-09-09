import React,{useState,useEffect, useCallback} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import EmployeeListComponent from './EmployeeListComponent';
import { addEmployeeToList, getEmployees,updateEmployee} from '../service/apiService';
import './components.css';
// import employeeDataArray from '../store/reducer';
import setEmployeeDataArray from '../store/action'


function CreateEmployeeComponent() {
 const dispatch = useDispatch();
  const [employeeData,setData] =useState({name:"",age:"",id:"",salary:99908});
  // const [employeeDataArray,setDataArray] =useState([]);
  // useEffect(()=>{
  //   console.log(employeeDataArray);

  // },[])
  const employeeDataArray= useSelector(state => state.employeeDataArray);
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
  const createEmployee = useCallback(async() => {
 const response = await addEmployeeToList(employeeData)  
  console.log(response);
  let tempArray = [...employeeDataArray]
    tempArray.push( response.data.data);

    dispatch(setEmployeeDataArray(tempArray))
  },[employeeData])


 
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
    <EmployeeListComponent employeeDataArray={employeeDataArray} setDataArray={setEmployeeDataArray}/>
    </div>
  )
}

export default CreateEmployeeComponent
