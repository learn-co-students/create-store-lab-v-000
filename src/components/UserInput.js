import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      hometown:''
  }

 }

    handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     });

   }
   handleSubmit = (e) => {
     e.preventDefault();
     this.props.store.dispatch({
       type: 'ADD_USER',
       user: this.state
     })
   }



  render() {

    return(
      <div>
        <h2>user input</h2>
        <form onSubmit={this.handleSubmit}>
        User:<input type="text" name="username" onChange={this.handleChange}/>
        <br/>
          Home Town:<input type="text" name="hometown"  onChange={this.handleChange}/>
        </form>

      </div>

    );
  }
};

export default UserInput;
