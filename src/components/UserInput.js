import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);


    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleOnSubmit(event) {
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }



  render() {
    return(
      <div>
        user input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)} />
            <br></br>

          <label>Hometown</label>
          <input
            type='text'
            name='hometown'
            value={this.state.hometown}
            onChange={(event) => this.handleOnChange(event)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
