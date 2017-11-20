import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      hometown: '',      
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <label>Add name</label>
          <input 
            type="text"
            onChange={(event)=>this.handleChange(event)}
            name="username" 
            value={this.state.username}/>
          <label>Add hometown</label>
          <input
            onChange={(event)=>this.handleChange(event)} 
            name="hometown"
            value={this.state.hometown}
            type="text"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default UserInput
