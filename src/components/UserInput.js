import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }

  }

  handleUsernameOnChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handleHometownOnChange(e){
    this.setState({
      hometown: e.target.value
    })
  }


  handleOnSubmit(e) {
    e.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input
            type="text"
            onChange={(e) => this.handleUsernameOnChange(e)}>
          </input>

          <input
            type="text"
            onChange={(e) => this.handleHometownOnChange(e)}>
          </input>


          <input type="submit"></input>

        </form>
      </div>
    );
  }
};

export default UserInput;
