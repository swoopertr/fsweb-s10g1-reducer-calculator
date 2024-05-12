 // burada büyük harfle yazılmış değişkenler reducer'a gönderilen action type'ı temsil edecek
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const UPDATE_DISPLAY = "UPDATE_DISPLAY";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CHANGE_OVERWRITE = "CHANGE_OVERWRITE";
export const SAVE_TO_MEMORY = "SAVE_TO_MEMORY";
export const GET_FROM_MEMORY = "GET_FROM_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const CLEAR_EVERYTHING = "CLEAR_EVERYTHING";
export const EQUALS = "EQUALS";
export const SQUARE_ROOT = "SQUARE_ROOT";

// küçük harfle yazılanlar da reducer'a gönderilecen action'ın tamamını halleden fonksiyonlar.
// mesela addOne fonksiyonu reducer'a sadece ADD_ONE type'ında bir action gönderiyor. reducers/index.js altında bu tip gelince ne oluyor bakılabilir
export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const updateDisplay = (numberAsString) => {
  return ({ type: UPDATE_DISPLAY, payload: numberAsString });
}

export const clearDisplay = () => {
  return ({ type: CLEAR_DISPLAY });
}
export const changeNumberOverwrite = () => {
  return ({ type: CHANGE_OVERWRITE });
}

export const changeOperation = (operator) => {
  return ({ type: CHANGE_OPERATION, payload: operator });
}

export const saveToMemory = () => {
  return ({ type: SAVE_TO_MEMORY });
}

export const getFromMemory = () => {
  return ({ type: GET_FROM_MEMORY });
}

export const clearMemory = () => {
  return ({ type: CLEAR_MEMORY });
}

export const clearEverything = () => {
  return ({ type: CLEAR_EVERYTHING });
}

export const equals = () => {
  return ({ type: EQUALS });
}
export const squareRoot = () => {
  return ({ type: SQUARE_ROOT });
}