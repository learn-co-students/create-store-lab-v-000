import React, { Component } from 'react';

class UserInput extends Component {
   constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    })

    this.setState({
      username: '',
      hometown: '',
    })
  }

  handleChange(event){
    if (event.target.name === "username"){
      this.setState({
        username: event.target.value,
      })
    } else {
      this.setState({
        hometown: event.target.value,
      })
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <label>Username: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} id="username" name="username" />
          <label>Hometown: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} id="hometown" name="hometown"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
