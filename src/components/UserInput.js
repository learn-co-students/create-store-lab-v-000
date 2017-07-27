import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '', 
      hometown: '',
    };
  }

  handleOnUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  handleOnHometownChange = (e) => {
    this.setState({ 
      hometown: e.target.value,
    });
  }

  handleOnSubmit = (e) => { 
    e.preventDefault(); 
    this.props.store.dispatch({ 
      type: 'ADD_USER', 
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
            <label>Username:</label>
            <input 
              type="text"
              onChange={this.handleOnUsernameChange}/>
            <label>Hometown:</label>
            <input 
              type="text"
              onChange={this.handleOnHometownChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
