import React, { useReducer, useState } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { DEFINITIONS, addOne, displayOnScreen, applyNumber } from './actions/index'
import reducer, { initialState } from './reducers';


function App() {
  const [state, dispatchReducer] = useReducer(reducer, initialState);

  const numChange = (e) => {
    let number = e.target.value;

  }
  const EventHandler = (evt) => {
    const btnValue = evt.target.value
    //let action_ = {type:DEFINITIONS. DISPLAY_ON_SCREEN, payload: btnValue };

    let action_ = displayOnScreen(btnValue);
    dispatchReducer(action_);
  }

  const AddingEventHandler = () => {
    //{ type: ADD_ONE, payload: number }
  }


  

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={EventHandler}/>
              <CalcButton value={"MR"} onClick={EventHandler}/>
              <CalcButton value={"MC"} onClick={EventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={EventHandler} />
              <CalcButton value={2} onClick={EventHandler}/>
              <CalcButton value={3} onClick={EventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={EventHandler}/>
              <CalcButton value={5} onClick={EventHandler}/>
              <CalcButton value={6} onClick={EventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={EventHandler}/>
              <CalcButton value={8} onClick={EventHandler}/>
              <CalcButton value={9} onClick={EventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={AddingEventHandler}/>
              <CalcButton value={"*"} onClick={EventHandler}/>
              <CalcButton value={"-"} onClick={EventHandler}/>
              <CalcButton value={"/"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={EventHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
