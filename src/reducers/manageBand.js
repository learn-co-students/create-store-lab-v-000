export default function manageUsers(state = {users: []}, action){
  console.log(action);

  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, { users: state.users.concat(action.user) });
    default:
      console.log("Initial state.userslength: %s", state.users.length);
      return state;

  }
}
