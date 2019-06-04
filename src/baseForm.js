import React, {Component} from 'react'

class BaseForm extends Component {
  constructor(props){
    super(props);

    this.first = "";
    this.last = "";

    this.state = {
        firstName: "Garrison",
        lastName: "Shepard",
        toggle: false
    };
    this.baseState = this.state;
  }

  handleClick = (event) => {
    this.setState({toggle: true });
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    //  this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    this.setState({toggle: false})
    this.baseState = this.state;
    event.preventDefault();
  }

  handleCancel = (event) => {
    this.setState(this.baseState);
    event.preventDefault();
  }

  render(){
    if(this.state.toggle === false) {
            return (
              <div>
              <div> First Name: {this.state.firstName}</div>
              <div> Last Name: {this.state.lastName} </div>
              <button onClick={this.handleClick}> Edit </button>
              </div>
            )
     } else {
          return (
              <form >
                <label>
                  First Name:
                  <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>

                <label>
                  Last Name:
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.handleCancel}>Cancel</button>
              </form>
            )
      }
  }
}
export default BaseForm
