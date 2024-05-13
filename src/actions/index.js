export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const DISPLAY_ON_SCREEN = "DISPLAY_ON_SCREEN" 
export const CLEAR_DISPLAY = "********" 
export const CLEAR_MEMORY = "********"
export const SAVE_TO_MEMORY = "********"
export const GET_FROM_MEMORY = "********"
export const UPDATE_TEMP_NUMBER = "********"

export const DEFINITIONS = {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  DISPLAY_ON_SCREEN,
  CLEAR_DISPLAY
}


export const addOne = (number) => {
  return ({ type: ADD_ONE, payload:number });
}
export const displayOnScreen = (str)=> {
  return ({type: DISPLAY_ON_SCREEN, payload: str })
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}