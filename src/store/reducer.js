import { SET_EMPLOYEE_DATA_ARRAY } from "./action"

const initialState= {
    employeeDataArray : []
}


const employeeReducer = (state = initialState, action) => {
switch (action.type) {
    case SET_EMPLOYEE_DATA_ARRAY :{

        return {
            employeeDataArray: action.payload
        }
    }
    default : return state;
}
}

export default employeeReducer