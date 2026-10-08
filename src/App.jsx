import './App.css'
import {useState} from 'react';

function CalcDisplay({dispValue}){
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({buttonLabel, onClick, className = ''}){
  return (
    <button className={`CalcButton ${className}`.trim()} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {

  const[disp, setDisp] = useState(0);
  const[operand1, setOperand1] = useState(null);
  const[operand2, setOperand2] = useState(null);
  const[operation, setOperation] = useState(null);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(operation + value);
    setOperation(operation + value);
  }

  const operationClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (operation === null){
      setDisp(value);
      setOperation(value);
    } else {
      setDisp(operation + value);
      setOperation(operation + value);
    }
  }

  const numButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (operation === null){
      if (operand1 === null){
        setDisp(value);
        setOperand1(value);
      } else {
        setDisp(operand1 + value);
        setOperand1(operand1 + value);
      }
    } else {
      if (operand2 === null){
        setDisp(value);
        setOperand2(value);
      } else {
        setDisp(operand2 + value);
        setOperand2(operand2 + value);
      }
    }
  }

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (operation === '+'){
      setDisp(parseInt(operand1) + parseInt(operand2))
    } else if (operation === '-'){
      setDisp(parseInt(operand1) - parseInt(operand2))
    } else if (operation === 'X'){
      setDisp(parseInt(operand1) * parseInt(operand2))
    } else if (operation === '÷'){
      setDisp(parseInt(operand1) / parseInt(operand2))
    }
  }

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(0);
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  }

  const myNameClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp("Luis Nicholas D. Reyes");
  }

  return (
    <div className='App'>

      <div className='Header'>
        Calculator of Luis Nicholas D. Reyes - WMD3A
      </div>

      <div className='Calculator'>

        <CalcDisplay dispValue={disp}/>

        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={numButtonClickHandler}/>
          <CalcButton buttonLabel={8} onClick={numButtonClickHandler}/>
          <CalcButton buttonLabel={9} onClick={numButtonClickHandler}/>
          <CalcButton className='operator' buttonLabel={'÷'} onClick={operationClickHandler}/>
          <CalcButton buttonLabel={4} onClick={numButtonClickHandler}/>
          <CalcButton buttonLabel={5} onClick={numButtonClickHandler}/>
          <CalcButton buttonLabel={6} onClick={numButtonClickHandler}/>
          <CalcButton className='operator' buttonLabel={'X'} onClick={operationClickHandler}/>
          <CalcButton buttonLabel={1} onClick={numButtonClickHandler}/>
          <CalcButton buttonLabel={2} onClick={numButtonClickHandler}/>
          <CalcButton buttonLabel={3} onClick={numButtonClickHandler}/>
          <CalcButton className='operator' buttonLabel={'-'} onClick={operationClickHandler}/>
          <CalcButton className='clear' buttonLabel={'C'} onClick={clearButtonClickHandler}/>
          <CalcButton buttonLabel={'0'} onClick={numButtonClickHandler}/>
          <CalcButton className='equal' buttonLabel={'='} onClick={equalButtonClickHandler}/>
          <CalcButton className='operator' buttonLabel={'+'} onClick={operationClickHandler}/>
        </div>

        <div className='solar-panel'>
          <CalcButton className='name' buttonLabel={'Reyes'} onClick={myNameClickHandler}/>
        </div>

      </div>
    </div>
  )
}

export default App
