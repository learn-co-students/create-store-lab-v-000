import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
      super(props)
      
      this.state = {
         username: '',
         hometown: ''
      }
  }
    
  handleSubmit = event => {
      event.preventDefault()
      this.props.store.dispatch({
          type: 'ADD_USER',
          user: this.state
      })
  }
  
  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
            <label>Username: </label>
            <input type="text" name="username" onChange={event => this.handleChange(event)} value={this.state.username} />
        
            <br /><br />
        
            <label>Hometown: </label>
            <input type="text" name="hometown" onChange={event => this.handleChange(event)} value={this.state.hometown} />
        
            <br /><br />
        
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
