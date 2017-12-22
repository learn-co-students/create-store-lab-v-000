import React, { Component } from 'react';

class UserInput extends Component {

  handleOnsubmit(event) {
    this.props.store.dispatch({
      type:'ADD_USER',
    })
  }

  constructor(){
    super();
    this.state={
      username: '',
      hometown:''
    }
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnsubmit(event)}>
          Username: <input type="text"/>
          Hometown: <input type="text"/>
        </form>
        <input type="submit"/>
      </div>
    );
  }
};

export default UserInput;
