import React from "react";
import { BoardDefault, ArrayDisPlay} from "./components/board";

function App() {
  let array = BoardDefault();
  array[0][4]=1; 
  array[0][5]=1;
  array[0][6]=1;
  array[1][5]=1;
  return (
    <div className="App">
      <h1>This is React App.</h1>
      <h1>18*10 Array</h1>
      <ArrayDisPlay array={array}/>
    </div>
  );
}

export default App;
