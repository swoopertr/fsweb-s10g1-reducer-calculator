export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};
export const reset = () => {
  return { type: CLEAR_DISPLAY };
};
export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  if (["+", "-", "*", "/"].includes(operation)) {
    return { type: CHANGE_OPERATION, payload: operation };
  } else {
    console.error("Invalid operation:", operation);
    return { type: "INVALID_OPERATION" };
  }
};
