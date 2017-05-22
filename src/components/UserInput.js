import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      hometown: "",
    }
  }

  processChangeOfUsername(event) {
    this.setState({
      username: event.target.value,
    })
  }

  processChangeOfHometown(event) {
    this.setState({
      hometown: event.target.value,
    })
  }

  processSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.processSubmit(event)}>
        <label>UserName:</label>
        <input type="text"
          value={this.state.username}
          onChange={(event) => this.processChangeOfUsername(event)}/>
        <br/>
        <label>HomeTown:</label>
        <input type="text"
          value={this.state.hometown}
          onChange={(event) => this.processChangeOfHometown(event)}/>
        <br/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
