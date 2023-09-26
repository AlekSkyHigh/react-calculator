import './App.css';

function Calculator() {

  return (
      <div className='calculator'>
        <div className='display'>0</div>
          <CalcButton value="7"/>
          <CalcButton value="8"/>
          <CalcButton value="9"/>
          <CalcButton className="operator" value="/"/>

          <CalcButton value="4"/>
          <CalcButton value="5"/>
          <CalcButton value="6"/>
          <CalcButton className="operator" value="*"/>

          <CalcButton value="1"/>
          <CalcButton value="2"/>
          <CalcButton value="3"/>
          <CalcButton className="operator" value="-"/>

          <CalcButton value="C"/>
          <CalcButton value="0"/>
          <CalcButton value="="/>
          <CalcButton className="operator" value="+"/>
      </div>
  )
}

function CalcButton(props){
  return <button className={props.className}>{props.value}</button>
}

export default Calculator;
