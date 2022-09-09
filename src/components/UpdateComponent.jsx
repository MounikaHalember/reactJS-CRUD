import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {updateEmployee,getEmployees} from '../service/apiService'
import Button from 'react-bootstrap/Button';
// import employeeDataArray from '../store/reducer';
import setEmployeeDataArray from '../store/action';

function UpdateComponent(props) {
//   const {employeeDataArray, setDataArray} = props;
    const [updateData,setUpdateData] = useState({name:'',id:'',age:'',salary:''});
    const employeeDataArray= useSelector(state => state.employeeDataArray);

    let updateDataArray = [];
  const dispatch = useDispatch();
    const updateNameHandler = (e)=>{
        setUpdateData({...updateData,name:e.target.value})
    }
    const updateAgeHandler = (e)=>{
        setUpdateData({...updateData,age:e.target.value})
    }
    const updateIDHandler = (e)=>{
        setUpdateData({...updateData,id:e.target.value})
    }
    const updateEmployeeHandler =()=>{
       
            employeeDataArray.forEach(data=>{
                console.log(data,updateData)
                if(Number(data.id) === Number(updateData.id)){
                    
                    updateDataArray.push(updateData)
                    console.log(updateData)
                }else{updateDataArray.push(data)}
            })
            console.log(updateDataArray)
            dispatch(setEmployeeDataArray(updateDataArray))
       
      }
  return (
    <div>
        UpdateComponent
        <div>
        <div>
        <span>Employee Name: </span><input type="text" value={updateData.name} onChange = {(e) => {updateNameHandler(e)}}/>
      </div>
      <div>
        <span>Employee Age: </span><input type="number"value={updateData.age} onChange = {(e) => {updateAgeHandler(e)}}/><br></br>
     </div>
      <div>
        <span>Employee ID: </span><input type="number"value={updateData.id} onChange = {(e) => {updateIDHandler(e)}}/><br></br>
     </div>
     <Button variant="primary" onClick = {updateEmployeeHandler} className="addBtn">Update Employee</Button>
   
        </div>
    </div>

  )
}

export default UpdateComponent
