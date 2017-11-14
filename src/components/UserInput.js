import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleInputChange = (event) => {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(
      Object.assign({}, this.state, obj)
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })

    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <lable>Username:</lable>
            <input
             name="username" 
             type="text"
             value={this.state.username}
             onChange={this.handleInputChange}
            />
            {this.state.username}
          </p>
          <p>
            <lable>Hometown:</lable>
            <input
             name="hometown" 
             type="text"
             value={this.state.hometown}
             onChange={this.handleInputChange}
            />
            {this.state.hometown}            
          </p>
          <input type="submit" />  
        </form>  
      </div>
    );
  }
};

export default UserInput;
