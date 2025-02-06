import React, { useState } from 'react'

const FBCStateEx = () => {
    // const data = React.useState(100);
    // console.log(data[0]);
    // console.log(data[1]);

    const[value, setValue] = useState("MRU");
    // console.log(value);
    let changeName=()=>{
        setValue("MallaReddy university");
    }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeName}>Change state</button>
    </div>
  )
}

export default FBCStateEx
