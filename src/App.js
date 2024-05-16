import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { addOne, applyNumber, changeOperation, reset, updateMemory, clearMemory, memoryTotalEqualizer } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleApplyNumberClick = (e) => {
    const nbr = e.target.value
    dispatch(applyNumber(nbr));
  };
  const handleOperation = (e) => {
    const operation = e.target.value
    dispatch(changeOperation(operation));
  };

  const handleReset = () => {
    dispatch(reset())
  };

  const handleMemory = (numberToBeSaved) => {
    dispatch(updateMemory(numberToBeSaved))
  };

const handleResetMemory = () => {
  dispatch(clearMemory())
}

const handleMemoryEqualizer = () => {
  dispatch(memoryTotalEqualizer())
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
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={()=> {handleMemory(state.total)}} />
              <CalcButton value={"MR"} onClick={()=> handleMemoryEqualizer()} />
              <CalcButton value={"MC"} onClick={()=>handleResetMemory() } />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumberClick} />
              <CalcButton value={2} onClick={handleApplyNumberClick} />
              <CalcButton value={3} onClick={handleApplyNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumberClick} />
              <CalcButton value={5} onClick={handleApplyNumberClick} />
              <CalcButton value={6} onClick={handleApplyNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumberClick} />
              <CalcButton value={8} onClick={handleApplyNumberClick} />
              <CalcButton value={9} onClick={handleApplyNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation} />
              <CalcButton value={"*"} onClick={handleOperation} />
              <CalcButton value={"-"} onClick={handleOperation} />
              <CalcButton value={"/"} onClick={handleOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleReset()}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
