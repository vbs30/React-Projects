import { useState } from 'react'
import './App.css'

/*

Interview question: if there are 5 setCounter called with counter + 1, what will be the output and why?
const [counter, setCounter] = useState(0);
const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

Answer = This will only return 1 after executing all the setCounter
WHY = counter is getting a value from useState. UseState sends values in a batch not one by one
      So setCounter is updating same counter and all 5 setCounters will be sent in batch to UI, which will keep the value as 1 and not 4
      To overcome this or to get value 4 from 1, you need to handle the prevCounter or the previous value inside setCounter method
      This will also work in batches but counter value will be changed

const [counter, setCounter] = useState(0);
const addValue = () => {
    setCounter(prevCounter => prevcounter + 1)
    setCounter(prevCounter => prevcounter + 1)
    setCounter(prevCounter => prevcounter + 1)
    setCounter(prevCounter => prevcounter + 1)
    setCounter(prevCounter => prevcounter + 1)
  }

This wil give value as 5 directly

*/

function App() {
  const [counter, setCounter] = useState(0);    //default value 1 will go to counter 



  const addValue = () => {
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    if(counter !== 0){
      setCounter(counter - 1)
    }
    else{
      setCounter(0)
    }
  }

  return (
    <>
      <h2>Hi this is vbs</h2>
      <h3>Counter: {counter}</h3>

      <button className="btn1" onClick={addValue}>Add</button>
      <br />
      <br />
      <button className="btn2" onClick={subtractValue}>Subtract</button>
    </>
  )
}

export default App
