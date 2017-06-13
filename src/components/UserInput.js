import React, { Component } from 'react';

class UserInput extends Component {
    constructor(){
        super();

        this.state = {
            username:'',
            hometown:'',
        }
    }
    handleOnChange = (event,field) => {
        console.log("FIELD = " + field)
        if (field === "username") {
            this.setState({...this.state, username: event.target.value})

        } else {
            this.setState({...this.state, hometown: event.target.value})
        }
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.store.dispatch({
            type: "ADD_USER",
            user:this.state
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Username</label>
                    <input type="text" value={this.state.username} name="username" id="username" onChange={ event => this.handleOnChange(event,"username")}></input>
                    <label>Home town</label>
                    <input type="text" value={this.state.hometown} id="hometown" name="hometown" onChange={ event => this.handleOnChange(event, "password")}></input>
                    <button type="submit">Create User</button>
                </form>
            </div>
        );
    }
};

export default UserInput;
