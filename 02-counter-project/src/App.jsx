import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5
  
  const addValue = () => {
    // counter = counter + 1;
    if (counter === 20){
      counter = 0;
    }
    setCounter(counter + 1)

    console.log("clicked", counter);
  }

  const substractValue = () => {
    if(counter === -1){
      counter = counter +1;
    }
    
    setCounter(counter - 1)
    console.log("clicked", counter);
  }

  return (
    <>
   <h1>Chai aur react</h1>
   <h2>Counter game</h2>
   <br/>
   <h3>Value: {counter}</h3>
   <button onClick={addValue}>Add value {counter}</button>
   <br/>
   <button onClick={substractValue}>Substract Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
