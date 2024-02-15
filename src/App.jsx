import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
// import name from './Components/Navbar'
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
    <Navbar/>
    <div className="div">
      <h2> React || Project </h2>
      <h2 className='heading'>Counter : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br /> <br />
      <button onClick={removeValue}>Remove </button>
      {/* <name/> */}
      {/* <p>{name}</p> */}
      
      </div>
      
    </>
  )
}

export default App
