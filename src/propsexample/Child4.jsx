import React from 'react'
import Child5 from './Child5'

const Child4 = (props) => {
  return (
    <div className='c4'>Child4
        <hr />
        <Child5 university={props.university}/>
    </div>
  )
}

export default Child4