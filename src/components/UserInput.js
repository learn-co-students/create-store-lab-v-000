import React, { Component } from 'react';
class UserInput extends Component {

  constructor(){
    super();
     this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsername(event) {
    // needs to update the userinput state as user types into input field, by copying the existing state and modifying the username value
    this.setState({
      ...this.state,
      username: event.target.value
    })
  }

  handleHometown(event) {
    this.setState({
      ...this.state,
      hometown: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // store is being passed down from App; the app state can be changed by calling the dispatch function, which activates manageuser with the actio type ADD_USER and the user object
    // can this method be rewritten with mapdispatch to props? i.e. packaging the dispatch method into another function?
    this.props.store.dispatch({
        type: 'ADD_USER',
        user: this.state,
      });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event) }>
          <input type="text" name="username" value={this.state.username}
            onChange={(event)=> this.handleUsername(event)}
            placeholder="Enter your username"/>
          <input type="text" name="hometown" value={this.state.hometown} onChange={(event)=>this.handleHometown(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
