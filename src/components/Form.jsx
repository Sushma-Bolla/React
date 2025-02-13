import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            skill: 'view'
        }
    }
    changeTextValue = (event) => {
        this.setState({ 
            textValue: event.target.value 
        });
    }
    changeSkill = (event) => {
        this.setState({ 
            skill: event.target.value 
        });
    }
    submitValues = (event) => {
        event.preventDefault();
        console.log("Form submitted with values:" + `${this.state.textValue}, ${this.state.skill}`);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitValues}>
                    <label>Firstname</label>
                    <input type="text" value={this.state.textValue} onChange={this.changeTextValue} />
                    <br />
                    <label>Skill</label>
                    <select value={this.state.skill} onChange={this.changeSkill}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="View">Vue</option>
                    </select>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;