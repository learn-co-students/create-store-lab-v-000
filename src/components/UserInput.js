import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometown(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
        }
      });
      this.setState({
        username: '',
        hometown: '',
      });
    }
 
  render() {
    return(
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Username</label><br/>
            <input 
              type="text" 
              value={this.state.username} 
              onChange={(event) => this.handleUsername(event)}/>
          </p>
          <p>
            <label>Hometown</label><br/>
            <input 
              type="text" 
              value={this.state.hometown} 
              onChange={(event) => this.handleHometown(event)}/>
          </p>
          <input type="submit" />   
        </form>    
      </div>
    );
  }
};

export default UserInput;
