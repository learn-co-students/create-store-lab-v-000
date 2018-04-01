import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        hometown: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.store.dispatch({
        type: 'ADD_USER',
        user: {
          username: this.state.username,
          hometown: this.state.hometown
        },
      });
      this.setState({
        username: '',
        hometown: ''
      });
    }

    render(){
       return(
         <div>
           <h2>Add a user</h2>
           <form onSubmit={(event) => this.handleSubmit(event)}>
             <p>
               <label>Username: </label>
               <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.handleChange} />
             </p>
             <p>
               <label>Hometown: </label>
               <input
                type="text"
                value={this.state.hometown}
                name="hometown"
                onChange={this.handleChange} />
             </p>
             <input type="submit" />
           </form>
         </div>
       );
     }
}
export default UserInput;
