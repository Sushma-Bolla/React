import React,{Component} from "react";
class CBCPropsex1 extends Component{
    render(){
        console.log(this);
        return(
            <div>CBCPropsex1
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                <div>
                    {this.props.desig[0]}
                </div>
                <h2>{this.props.userDetails.area}</h2>
                <button onClick={this.props.sendFun}>click on button</button>
            </div>
        )
    }
}
export default CBCPropsex1;