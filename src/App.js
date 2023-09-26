import './App.css';
import React from 'react';

function Calculator() {

  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
  });

  function handleNumber(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }

    setCalc({ current: newValue, total: calc.total, isInitial: false });
  }

  function handleOperator(value) {

  }

  function renderDisplay() {
    return calc.current;
  }

  return (
    <div className='calculator'>
      <div className="display">{renderDisplay()}</div>
      <CalcButton value="7" onClick={handleNumber} />
      <CalcButton value="8" onClick={handleNumber} />
      <CalcButton value="9" onClick={handleNumber} />
      <CalcButton className="operator" value="/" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber} />
      <CalcButton className="operator" value="*" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber} />
      <CalcButton value="2" onClick={handleNumber} />
      <CalcButton value="3" onClick={handleNumber} />
      <CalcButton className="operator" value="-" onClick={handleOperator} />

      <CalcButton value="C" />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" />
      <CalcButton className="operator" value="+" onClick={handleOperator} />
    </div>
  )
}

function CalcButton(props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

export default Calculator;
