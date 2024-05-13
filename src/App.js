import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { addOne, applyNumber, changeOperation, reset, updateMemory, clearMemory, memoryTotalEqualizer } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleApplyNumberClick = (nbr) => {
    dispatch(applyNumber(nbr));
  };
  const handleOperation = (operation) => {
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
              <CalcButton value={1} onClick={() => handleApplyNumberClick(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumberClick(2)} />
              <CalcButton value={3} onClick={() => handleApplyNumberClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumberClick(4)} />
              <CalcButton value={5} onClick={() => handleApplyNumberClick(5)} />
              <CalcButton value={6} onClick={() => handleApplyNumberClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumberClick(7)} />
              <CalcButton value={8} onClick={() => handleApplyNumberClick(8)} />
              <CalcButton value={9} onClick={() => handleApplyNumberClick(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")} />
              <CalcButton value={"*"} onClick={() => handleOperation("*")} />
              <CalcButton value={"-"} onClick={() => handleOperation("-")} />
              <CalcButton value={"/"} onClick={() => handleOperation("/")} />
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
