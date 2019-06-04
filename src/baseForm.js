import React, {Component} from 'react'

class BaseForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        firstName: "Garrison"
    };
  }

  handleChange = (event) => {
      this.setState({firstName: event.target.value} );
  }

  handleSubmit = (event) => {
    alert('Your Saved Text: ' + this.state.firstName);
    event.preventDefault();
  }



  render(){
    return(
       <div>
          <div> First Name: </div>
          <div> Last Name:  </div>
          <button> Edit </button>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input value={this.state.firstName} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>

       </div>
    )
  }
}
export default BaseForm
