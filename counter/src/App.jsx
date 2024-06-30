import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5

  function addValue() {
   if(counter>=0){ counter += 1}
    setCounter(counter)
    console.log("clicked" ,counter);
    
  }

                                                                             
  return (
    <>
      <h1>Counter</h1>
      <p>Counter Value: {counter}</p>

      <button onClick={addValue}>increment</button>
     
    </>
  )
}

export default App
