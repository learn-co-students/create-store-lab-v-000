import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hometown: '',
      username: '',
    }
  }

  handleOnChangeHometown(event){
    this.setState({
      hometown: event.target.value,
    })
  }

  handleOnChangeUsername(event){
    this.setState({
      username: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
    this.setState({
      hometown: '',
      username: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        Username:  <input type="text"
            value={this.state.username}
            onChange={(event) => this.handleOnChangeUsername(event)} />
          Hometown: <input type="text" value={this.state.hometown} onChange={(event) => this.handleOnChangeHometown(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
