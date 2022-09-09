export const SET_EMPLOYEE_DATA_ARRAY ='SET_EMPLOYEE_DATA_ARRAY'



const setEmployeeDataArray = (data)=>{
    return async (dispatch) =>{
         dispatch({
            type: SET_EMPLOYEE_DATA_ARRAY,
            payload: data
        })
    }
}

export default setEmployeeDataArray;