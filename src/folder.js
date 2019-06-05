import React, {Component} from 'react'


class Folder extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOnToggle: true
    }

  }

  handleClick = (event) => {
    this.setState({isOnToggle: !this.state.isOnToggle})
  }




  render() {

    if (this.state.isOnToggle) {

    return(
        <div>
            <div>
              <h3> Home </h3>
              <ul>
                <li> File 1</li>
                <li> File 2</li>
                <li> File 3</li>
              </ul>
              <button name="button" onClick={this.handleClick}>hide</button>
            </div>
        </div>)
    } else {
      return(
      <div>
      <h3> Home </h3>
      <button name="button" onClick={this.handleClick}>hide</button>
      </div>
      )
    }

  }
}
export default Folder
