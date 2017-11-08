import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

handleOnChange(event) {
  this.setState({
    [event.target.name]: event.target.value,
  });
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
}

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username:  </label>
          <input type="text"
          name="username"
          value={this.state.username}
          onChange={(event) => this.handleOnChange(event)} />
          <label>Hometown:  </label>
          <input type="text"
          name="hometown"
          value={this.state.hometown}
          onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
