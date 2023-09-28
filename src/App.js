import './App.css';
import React from 'react';

function Calculator() {

  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handleNumber(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }

    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }

  // * Updating the state:
  function handleOperator(value) {
    const total = doCalculation();

    setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
  }

  function doCalculation() {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+": total += parseInt(calc.current); break;
      case "-": total -= parseInt(calc.current); break;
      case "*": total *= parseInt(calc.current); break;
      case "/": total /= parseInt(calc.current); break;
      default: total = parseInt(calc.current)
    }

    return total;
  }

  function renderDisplay() {
    return calc.current;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
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

      <CalcButton value="C" onClick={handleClear} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleOperator} />
      <CalcButton className="operator" value="+" onClick={handleOperator} />
    </div>
  )
}

function CalcButton(props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

export default Calculator;
