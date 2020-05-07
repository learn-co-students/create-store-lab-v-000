import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
     
      username: '',
      hometown: ''
    }
  }
  // handleChange = (e) =>{
  //   if (e.target.id == "username")
  //     this.setState({
  //       username: e.target.value
  //     })

  //   if(e.target.id == "hometown")
  //     this.setState({
  //       hometown: e.target.value
  //     })
  // }
  // handleChange = e => {
  //   const {name, value} = e.target;
  //   this.setState({[name]: value});
  // }

  handleChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }




  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
    this.setState({
      username: '',
      hometown: ''
    })
  }
  render() {
    
 
    return(
      <form onSubmit={this.handleSubmit}>

       Username: <input onChange={this.handleChange} name="username" value={this.state.username} type="text"/>{this.state.username}<p/>
       Hometown: <input onChange={this.handleChange} name="hometown" value={this.state.hometown} type="text"/>{this.state.hometown}<p/>
       <input type="submit"/>
      </form>
    );
  }
};

export default UserInput;
