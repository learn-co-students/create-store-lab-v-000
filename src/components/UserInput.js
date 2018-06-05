import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()

    this.state= { 
      username: '', 
      hometown: ''
    };
  }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    handleSubmit(e) {
      e.preventDefault(); 
      this.props.store.dispatch({
        type: 'ADD_USER', 
        user: this.state,
      })
    }
  
  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}> 
          <input id="username" 
            placeholder= "Enter username"
            type= "text" 
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          /> 
          <input id="hometown"
            placeholder= "Enter hometown"
            type= "text"
            value= {this.state.hometown}
            onChange={(e) => this.handleChange(e)}
          /> 
          <button> Submit </button> 
        </form> 
      </div>
    );
  }
};

export default UserInput;
