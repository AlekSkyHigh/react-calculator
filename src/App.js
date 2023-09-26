import './App.css';
import React from 'react';

function Calculator() {

  const [display, setDisplay] = React.useState(0);

  function handleNumber(value){
    setDisplay(value)
  }

  function handleOperator(value){
    alert('handleOperator click' + value);
  }

  return (
      <div className='calculator'>
        <div className="display">{display}</div>
          <CalcButton value="7" onClick={handleNumber}/>
          <CalcButton value="8" onClick={handleNumber}/>
          <CalcButton value="9" onClick={handleNumber}/>
          <CalcButton className="operator" value="/" onClick={handleOperator}/>

          <CalcButton value="4" onClick={handleNumber}/>
          <CalcButton value="5" onClick={handleNumber}/>
          <CalcButton value="6" onClick={handleNumber}/>
          <CalcButton className="operator" value="*" onClick={handleOperator}/>

          <CalcButton value="1" onClick={handleNumber}/>
          <CalcButton value="2" onClick={handleNumber}/>
          <CalcButton value="3" onClick={handleNumber}/>
          <CalcButton className="operator" value="-" onClick={handleOperator}/>

          <CalcButton value="C"/>
          <CalcButton value="0" onClick={handleNumber}/>
          <CalcButton value="="/>
          <CalcButton className="operator" value="+" onClick={handleOperator}/>
      </div>
  )
}

function CalcButton(props){
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

export default Calculator;
