export default function manageUsers(state = {
  users: []
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_USER':
    {debugger};
      console.log("Current state.users length is", state.users.length);
      console.log("Updating state.users length to %s", state.users.length + 1);
      const user = Object.assign({}, action.user, {hometown: action.user.hometown})
      {debugger};
      return { users: state.users.concat(user) }
    default: 
      return state;
  }
}

