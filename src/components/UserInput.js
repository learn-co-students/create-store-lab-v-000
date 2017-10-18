import React, { Component } from 'react';

class UserInput extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hometown: ''
    };

  }

  handleClick() {


  }


  render() {
    return(
      <div>
        <form onClick={this.handleClick} >
          Enter User: <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
