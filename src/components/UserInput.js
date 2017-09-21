import React, { Component } from 'react';

class UserInput extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            hometown: ''
        };
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.store.dispatch({
            type: 'ADD_USER',
            user: {
            username: this.state.username,
            hometown: this.state.hometown,
           },
        });
    }


  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label>Username</label>
        <input type="text" value={this.state.user} onChange={this.handleOnChange}/>
        <label>Hometown</label>
        <input type="text" value={this.state.hometown} onChange={this.handleOnChange}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
