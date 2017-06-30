export default function manageUsers(state = {
  users: []
}, action) {
  switch(action.type) {

    case 'ADD_USER':
      console.log("Current state.users %s", state.users);
      console.log("Updating state.users %s", state.users);
      return Object.assign({}, state, { users: state.users.concat(action.user) });

    default:
      console.log("Initial state.users length: %s", state.users.length);
      return state;
  }
}

