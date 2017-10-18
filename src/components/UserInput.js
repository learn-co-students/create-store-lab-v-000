import React, { Component } from 'react';

class UserInput extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hometown: '',
      username: ''
    };

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }); 
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
           <p>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
              placeholder="username" />
          </p>
          <p>
            <input
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={(event) => this.handleChange(event)}
              placeholder="hometown" />
          </p>
        </form>
      </div>
    );
  }
};

export default UserInput;
