import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  CLEAR_MEMORY,
  MEMORY_UPDATE,
  MEMORY_TOTAL_EQUALIZE
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100,
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
        total: state.total + 1,
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
        operation: "+",
        memory: 0,
      };
      case MEMORY_UPDATE:
        return {
          ...state,
          memory: action.payload,
        };
        case CLEAR_MEMORY:
          return {
            ...state,
            memory: 0,
          };
          case MEMORY_TOTAL_EQUALIZE:
            return {
              ...state,
              total: state.memory,
            };
    default:
      return state;
  }
};

export default reducer;
