
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  CLEAR_MEMORY,
  DISPLAY_ON_SCREEN,
  SAVE_TO_MEMORY,
  GET_FROM_MEMORY,
  UPDATE_TEMP_NUMBER
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "*",
  memory: 0,
  tmpNumber: 0
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };
    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };
    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };
    case DISPLAY_ON_SCREEN:
      
    let last_total = 0;
      if(state.total == 0 ){
        last_total = action.payload;
      }else{
        last_total = state.total + action.payload;
      }
      return {
        ...state,
        total : last_total
      };
    case SAVE_TO_MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case GET_FROM_MEMORY:
      return {
        ...state,
        total: state.memory,
      };
    case UPDATE_TEMP_NUMBER:
      return {
        ...state,
        tmpNumber: action.payload,
        operation : action.operation,
        total : 0
      };  
    default:
      return state;
  }
};

export default reducer;
