import './App.css';
import React from 'react';

function Calculator() {

  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
    errorMessage: "",
  });

  function handleNumber(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }

    if (newValue.length > 17) {
      setCalc({
        current: calc.current,
        total: calc.total,
        isInitial: false,
        preOp: calc.preOp,
        errorMessage: "Input too long (max 17 characters)",
      });
      return; // Exit the function to prevent setting the state with a long value
    }

    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp, errorMessage: "" });
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
    const numLength = calc.current.length;

    const scalingLevels = [
      { threshold: 9, fontSize: '1.1em' },
      { threshold: 12, fontSize: '0.9em' },
      { threshold: 17, fontSize: '0.6em' },
    ];

    const matchedLevel = scalingLevels.find(level => numLength <= level.threshold);

    const fontSize = matchedLevel ? matchedLevel.fontSize : '30px';

    return (
      <div style={{ fontSize }}>
        {calc.errorMessage ? calc.errorMessage : calc.current}
      </div>
    );
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
    <div className='container'>
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
    </div >

  )
}

// * This is a reusable component for rendering calculator buttons.
function CalcButton(props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

export default Calculator;
