import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)

    this.state ={
      username: '',
      hometown: ''
    };
  };

    handleOnChangeUsername(event){
      this.setState({
        username: event.target.value
      })
    }

    handleOnChangeHometown(event){
      this.setState({
        hometown: event.target.value
      })
    }


    handleOnSubmit(event){
      event.preventDefault()
      this.props.store.dispatch({
        type: 'ADD_USER',
        user: this.state
      })


    this.setState({
      username: '',
      hometown: ''
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChangeUsername(event)} />
          <input type="text" onChange={(event) => this.handleOnChangeHometown(event)} />
          <input type="submit" />
        </form>
        {this.state.username}
        {this.state.hometown}
      </div>
    );
  }
};

export default UserInput;
