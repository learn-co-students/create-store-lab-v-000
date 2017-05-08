import React, { Component } from 'react';
import { createStore } from 'redux';

import manageBand from './reducers/manageBand';
import UserInput from './components/UserInput';

const store = createStore(manageBand);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store} />
      </div>
    );
  }
};

export default App;
