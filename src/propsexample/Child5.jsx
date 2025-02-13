import React from 'react'

const Child5 = (props) => {
console.log(props);
  return (
    <div className='c5'>Child5
    <h1>University : {props.university}</h1>
    </div>
  )
}

export default Child5