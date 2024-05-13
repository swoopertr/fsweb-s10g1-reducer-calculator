import { type } from "@testing-library/user-event/dist/type";

export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_UPDATE ="MEMORY_UPDATE"
export const CLEAR_MEMORY ="CLEAR_MEMORY"
export const MEMORY_TOTAL_EQUALIZE = "MEMORY_TOTAL_EQUALIZE"

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

export const updateMemory = (NumberToBeSaved) => {
  return {type: MEMORY_UPDATE, payload: NumberToBeSaved}
}

export const clearMemory = () => {
  return {type: CLEAR_MEMORY}
}

export const memoryTotalEqualizer = () => {
  return {type: MEMORY_TOTAL_EQUALIZE}
}