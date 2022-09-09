import axios from 'axios';

const url = 'https://dummy.restapiexample.com/api/v1/create';

export const getEmployees = ()=> {
    const data =  axios.get(url);
    return data;
}
export const getEmployeeByID = (employeeID)=> {

    const data =  axios.get(url + '/' + employeeID);
    return data;
}

export const addEmployeeToList = (employee)=>{
    const postURL = "https://dummy.restapiexample.com/api/v1/create"
   const data= axios.post(postURL, employee)
    return data
}
export const updateEmployee = (employee, employeeID)=>{
    const updateURL = "https://dummy.restapiexample.com/api/v1/create"
    return axios.put(updateURL + '/' + employeeID, employee);
}
