import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return(
      <div>
        Input: <input onChange={(event) => this.handleChange(event)} />
      </div>
    );
  }
};

export default UserInput;
