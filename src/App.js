import React, { Component } from 'react';
import UserInput from './components/UserInput';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
      </div>
    );
  }
};
