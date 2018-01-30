import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props){
    super(props);
    this.state={
        username: '',
        hometown:''
    }
  }

  handleOnSubmit(event) {
    this.props.store.dispatch({
      type:'ADD_USER',
      user: this.state
    })
  }

  handleOnChange(event){
    this.setState({
      [event.target.name]:event.target.value,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          Username: <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={(event) => this.handleOnChange(event)}/>
          Hometown: <input
            type="text"
            value={this.state.hometown}
            name='hometown'
            onChange={(event) => this.handleOnChange(event)}/>
        </form>
        <input type="submit"/>
      </div>
    );
  }
};

export default UserInput;
