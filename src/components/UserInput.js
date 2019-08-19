import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super();
    this.state = {username: '', hometown: ''}
  }

  handleUsernameChange = function (event) {
    this.setState({username:event.target.value});
  }.bind(this);

  handleHometownChange = function (event) {
    this.setState({hometown:event.target.value});
  }.bind(this);

  handleSubmits = function (event) {
    event.preventDefault();
    this.props.store.dispatch({
        type: 'ADD_USER',
        user: {
          username: this.state.username,
          hometown: this.state.hometown
        }
    });
    this.setState({
        username: '',
        hometown: ''
    })

  }.bind(this);

  render() {
    return(
      <div>
          <form onSubmit={this.handleSubmits}>
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
              <input type="text" value={this.state.hometown} onChange={this.handleHometownChange}/>
              <input type="submit"/>
          </form>
          {this.state.username} {this.state.hometown}
      </div>
    );
  }
};

export default UserInput;
