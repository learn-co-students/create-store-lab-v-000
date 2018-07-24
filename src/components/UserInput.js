import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleOnChange(event, inputType) {
    if(inputType === "username") {
      this.setState({
        username: event.target.value,
        hometown: this.state.hometown,
      })
    } else {
      this.setState({
        username: this.state.username,
        hometown: event.target.value,
      });
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });
    this.setState({
      username: '',
      hometown: '',
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <label>Username: </label>
      <input type="text" onChange={(event) => this.handleOnChange(event, "username")} value={this.state.username}/>
      <br></br>
      <label>Hometown: </label>
      <input type="text" onChange={(event) => this.handleOnChange(event, "hometown")} value={this.state.hometown}/>
      <br></br>
      <input type="submit" value="add user"/>
      </form>
      </div>
    );
  }
};

export default UserInput;
