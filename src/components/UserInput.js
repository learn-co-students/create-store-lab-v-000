import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label> Username </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
            <label> Hometown </label>
            <input
              type="text"
              name="hometown"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
