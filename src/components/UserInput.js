import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
  super(props);

  this.state = {
    username: '',
    hometown: '',
  };
}

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
    this.setState({
      username:'',
      hometown: '',
    })
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type="text"
                 name="username"
                 onChange={this.handleChange}
                 value={this.state.username}
          />

         <input type="text"
                 name="hometown"
                 onChange={this.handleChange}
                 value={this.state.hometown}
          />

         <input type="submit"/>

        </form>
      </div>
    );
  }
};

export default UserInput;

