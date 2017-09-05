import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hometown: ""
    };
  }

  changeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  changeHometown(event){
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit(event){
    debugger;
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Username </label>
          <input type="text" value={this.state.username} onChange={(event) => this.changeUsername(event)}/>
          <label> Hometown  </label>
          <input type="text" value={this.state.hometown} onChange={(event) => this.changeHometown(event)} />
          <button> Submit </button>
        </form>
      </div>
    );
  }
};

export default UserInput;
