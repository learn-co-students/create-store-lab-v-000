export default function manageUsers(state = {
    users: []
}, action){
    console.log(action);
    switch(action.type) {
        
        case 'ADD_USER':
            console.log("Current state.users length %s", state.users.length);
            console.log("Updating state.users length to %s", state.users.length + 1);
            //const user = Object.assign({}, action.user);
            //return { users: state.users.concat(user) };
            return Object.assign({}, state, {users: state.users.concat(action.user)})
            
        default: 
            console.log("Initial state.users length: %s", state.users.length)
            return state;
    }
}


