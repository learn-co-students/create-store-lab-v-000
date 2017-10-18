import React, { Component } from 'react';

class UserInput extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hometown: '',
      username: ''
    };

  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        text: this.state.text
      }
    });

    this.setState({
      text: ''
    });
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    }); 
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          Enter User: <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
