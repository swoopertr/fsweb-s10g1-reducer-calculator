import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
// burada reducer formülünü ve state'in ilk halini import ediyoruz
import reducer, { initialState } from './reducers';
// burada kullanacağımız formülleri import ediyoruz
import { clearDisplay, updateDisplay, changeOperation, applyNumber, changeNumberOverwrite, saveToMemory, getFromMemory, clearMemory, clearEverything, equals } from './actions';

function App() {

  // burada UseReducer Hook'unu kullanıyoruz. state'i dispatchReducer ile yöneteceğiz
  const [state, dispatchReducer] = useReducer(reducer, initialState)
  
  // buradaki numbers array onclick event'ından gelenin rakam olduğunu doğrulamak için kullanılacak
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // buradaki operators onclick event'ından gelenin operator olduğunu doğrulamak için kullanılacak
  const operators = ["+", "-", "*", "/"]

  // burada event handler ekleyerek butonlara atanacak fonksiyonları yazıyoruz.
  const eventHandler = (e) => {
    let value = e.target.value

    // rakama tıklandıysa olacaklar
    if (numbers.includes(parseInt(value))) {
      // ekrandaki rakamın üzerine yazıp yazılmayacağı kontrolü
      if (state.numberOverwrite) {
        dispatchReducer(clearDisplay());
        dispatchReducer(changeNumberOverwrite())
      }
      // ekrandaki rakamları güncelleme
      dispatchReducer(updateDisplay(value.toString()))
    } // 4 işlem işaretlerine tıklanınca yapılacaklar
      else if (operators.includes(value)) {
        // rakamların üzerine yazılıp yazılmayacağı kontrolü
        // üzerine yazma aktifse sadece yapılacak işlemi değiştir
        if (state.numberOverwrite) {
          dispatchReducer(changeOperation(value));
        } // üzerine yazma aktif değilse önce işlemi yap sonra operatörü değiştir sonra rakamın üzerine yazma modunu değiştir
          else {
            dispatchReducer(applyNumber(parseInt(state.display)))
            dispatchReducer(changeOperation(value));
            dispatchReducer(changeNumberOverwrite());
        }
    } // = işaretine tıklanınca olacaklar
      else if(value === "=") {
        dispatchReducer(equals())
        dispatchReducer(changeNumberOverwrite());
    }
  }
  // MC gibi kısayol tuşlarının event handler fonksiyonu
  const shortCutHandler = (e) => {
    
    let value = e.target.value;
   // burada else if kullanımı yerine switch yapmak daha rahat geldi ama else if ile de yapılabilir
    switch (value) {
      case ("M+"):
        dispatchReducer(saveToMemory());
        // burada return veya break koymak önemli değilse işlem yapmaya devam ediyor
        break;
      case ("MR"):
        dispatchReducer(getFromMemory());
        break;
      case ("MC"):
        dispatchReducer(clearMemory());
        break;
      case ("CE"):
        dispatchReducer(clearEverything());
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.display} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              {/* buraya ekstradan en son yapılan total'i de göstermek için aşağıdakini ekledim */}
              <span id="total"><b>Total:</b> {state.total}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            {/* bundan sonrasında artık düğmelere tıklandığında hangi fonksiyon çalışacak onları atıyoruz */}
            <div className="row">
              <CalcButton value={"M+"} onClick = {shortCutHandler} />
              <CalcButton value={"MR"} onClick = {shortCutHandler} />
              <CalcButton value={"MC"} onClick = {shortCutHandler} />
              <CalcButton value={"?"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={eventHandler} />
              <CalcButton value={2} onClick={eventHandler} />
              <CalcButton value={3} onClick={eventHandler} />
              <CalcButton value={"+"} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler} />
              <CalcButton value={5} onClick={eventHandler} />
              <CalcButton value={6} onClick={eventHandler} />
              <CalcButton value={"-"} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler} />
              <CalcButton value={8} onClick={eventHandler} />
              <CalcButton value={9} onClick={eventHandler} />
              <CalcButton value={"*"} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={"?"} />
              <CalcButton value={0} onClick={eventHandler} />
              <CalcButton value={"="} onClick={eventHandler} />
              <CalcButton value={"/"} onClick={eventHandler} />


            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {shortCutHandler} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
