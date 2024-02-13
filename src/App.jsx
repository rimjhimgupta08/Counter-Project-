import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 6;
   let [counter, setCounter] = useState(5)

  const addValue = () =>{
    
    if(counter < 20){
    counter = counter + 1;
    setCounter(counter)
    }
  }
  const removeValue = () =>{
    if(counter > 0)
    {
      setCounter(counter - 1);
    }
    
  }
  return (
    <>
      <h2>Hello React || {counter}</h2>
      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove </button>
    </>
  )
}

export default App
