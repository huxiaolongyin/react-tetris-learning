import React from 'react'
import  {BoardDefault ,ArrayDisPlay}  from './components/board'



function App() {
  const board =BoardDefault();
  return (
    <div className="App">
      <h1>This is React App.</h1>
      <h1>18*10 Array</h1>
      <ArrayDisPlay board={board}/>
    </div>
  )
}


export default App;