import React,{useState,useEffect} from 'react'
import {updateEmployee} from '../service/apiService'
import Button from 'react-bootstrap/Button';


function UpdateComponent(props) {
  const {employeeDataArray, setDataArray} = props;
    const [updateData,setUpdateData] = useState({name:'',id:'',age:'',salary:''});
    const [updateDataArray,setUpdateDataArray] = useState([]);

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
        updateEmployee(updateData,updateData.id).then(response=>{
            console.log(response)
            employeeDataArray.forEach(data=>{
                if(data.id === updateData.id){
                    setDataArray({...data,name:updateData.name})
                }
            })
        })
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