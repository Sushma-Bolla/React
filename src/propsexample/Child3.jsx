import React from 'react'
import Child4 from './Child4'

const Child3 = (props) => {
    // console.log(props);
  return (
    <div className='c3'>Child3
        <hr />
        <Child4 university={props.university}/>
    </div>
  )
}

export default Child3