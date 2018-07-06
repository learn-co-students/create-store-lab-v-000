import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()

  this.state = {
    username: '',
    hometown: '',
  };
}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event){
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          USERNAME
          <input
            type="text"
            name="username"
            onChange={(event) => this.handleChange(event)}/>
            HOMETOWN
            <input
              type="text"
              name="hometown"
              onChange={(event) => this.handleChange(event)}/>
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
