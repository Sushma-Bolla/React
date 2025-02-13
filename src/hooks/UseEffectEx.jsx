import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // setCount(1000);
  //   setTimeout(() => { //to change the value of count after 4 seconds we use setTimeOut
  //     setCount(1000);
  //   }, 4000)
  // })

  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json().then(data => {
        // console.log(data);
        setUsers(data);
      }))
      .catch(err => console.log(err));
  }, []); //empty dependency allows to execute only once

  return (
    <div>UseEffectEx
      {/* <h1>{count}</h1> */}
      {
        users.map((user, i) => {
          return (
            //*empty fragment
            // <> 
            //   <h1>{user.name}</h1>  
            //   <h3>{user.email}</h3>
            // </>

            //*react fragment
            <React.Fragment key={i}>
              <h1>{user.name}</h1>
              <h3>{user.email}</h3>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default UseEffectEx