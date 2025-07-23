import { useState } from 'react';
import Add from './Add.jsx';
import Sub from './Sub.jsx/'
import Mul from './Mul.jsx/';
import Div from './Div.jsx/';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');

  return (
    <div className='calculator-container'>
      <h2 className='title'>Basic calculator</h2>

      <input type="number"
      placeholder='Enter first number'
      value={num1}
      onChange={(e) => setNum1(e.target.value)}
      className='input-box'
       />
      <input type="number"
      placeholder='Enter second number'
      value = {num2}
      onChange={(e) => setNum2(e.target.value)} 
      className='input-box'/>  

      <div className='btn-group'>
        <button onClick={()=> setOperation('Add')} className='btn'>+</button>
        <button onClick={()=> setOperation('Sub')} className='btn'>-</button>
        <button onClick={()=> setOperation('Mul')} className='btn'>*</button>
        <button onClick={()=> setOperation('Div')} className='btn'>/</button>
      </div>
      <div className='result-box'>
        {operation === 'Add' && <Add x={+num1} y={+num2}/>}
        {operation === 'Sub' && <Sub x={+num1} y={+num2}/>}
        {operation === 'Mul' && <Mul x={+num1} y={+num2}/>}
        {operation === 'Div' && <Div x={+num1} y={+num2}/>}
      </div>
    </div>
  )
}

export default App
