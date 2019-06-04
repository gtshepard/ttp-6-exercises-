import React, {Component} from 'react'

class BaseForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        firstName: "Garrison",
        lastName: "Shepard",
        toggle: false
    };
  }

  handleClick = (event) => {
    this.setState({toggle: true });
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    this.setState({toggle: false})
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
              <form onSubmit={this.handleSubmit}>
                <label>
                  First Name:
                  <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>

                <label>
                  Last Name:
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label>

                <input onClick = {this.handleClick} type="submit" value="Submit" />
              </form>
            )
      }
  }
}
export default BaseForm
