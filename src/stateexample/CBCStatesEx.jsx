import React, {Component} from 'react'
import "./cbcstateex.css";

class CBCStateEx extends Component {
  constructor(){
    super();
    this.state = {
      username : "Pranav",
      count : 0
    };
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  reset=()=>{
    this.setState({count:0})
  }
  // changeName=()=>{
  //   this.setState({username : "Pavan"});
  // }
  render(){
    console.log(this);
    return(
      <div className="cbcstate">
        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>Update the State</button> */}

        <h1>{this.state.count}</h1>
        <div className='btn'>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
export default CBCStateEx;