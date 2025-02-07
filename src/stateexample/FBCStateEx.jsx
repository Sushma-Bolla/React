import React, { useState } from 'react'
import "./cbcstateex.css";

const FBCStateEx = () => {
    // const data = React.useState(100);
    // console.log(data[0]);
    // console.log(data[1]);

    // const[value, setValue] = useState("MRU");
    const[count, setCount] = useState(0);
    // console.log(value);

    // let changeName=()=>{
    //     setValue("MallaReddy university");
    // }

    let increment=()=>{
      setCount(count+1);
    }
    let decrement=()=>{
      setCount(count-1);
    }
    let reset=()=>{
      setCount(0);
    }
  return (
    <div className='cbcstate'>
        {/* <h1>{value}</h1>
        <button onClick={changeName}>Change state</button> */}
        <h1>{count}</h1>
        <div className='btn'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default FBCStateEx;
