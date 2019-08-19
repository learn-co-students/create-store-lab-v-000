import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnChange = (event) => {
    const change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleOnSubmit(event) {
        event.preventDefault();
        this.props.store.dispatch({
          type: 'ADD_USER',
          user: this.state,
        });
      }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)}/>
        <input type="text" name="hometown" value={this.state.hometown} onChange={(event) => this.handleOnChange(event)}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
