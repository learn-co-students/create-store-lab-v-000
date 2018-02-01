import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props){
    super(props);

    this.state = {
        username: "",
        hometown: "",
    }
  }

  handleOnChange(event){
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleOnSubmit(event){
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })

    this.setState({
      username: "",
      hometown: "",
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username: </label>
          <input name="username" type="text" onChange={(event) => this.handleOnChange(event)} /> <br/>
          <label>Hometown: </label>
          <input name="hometown" type="text" onChange={(event) => this.handleOnChange(event)} /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
