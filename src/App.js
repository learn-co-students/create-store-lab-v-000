import React, { Component } from 'react';
import UserInput from './components/UserInput';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
      </div>
    );
  }
};

export default App;

// import './App.css';
//
// class App extends Component {
//
//   handleOnClick(){
//     this.props.store.dispatch({
//       type: 'INCREASE_COUNT',
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <button onClick={(event) => this.handleOnClick(event)}>Click</button>
//         <p>{this.props.store.getState().items.length}</p>
//       </div>
//     );
//   }
// };
//
// export default App;
