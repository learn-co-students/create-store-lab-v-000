export default function manageUsers(state = {
  users: []
}, action ){
  switch(action.type) {

    case 'ADD_USER':
      console.log("PITO!");
      return {...state, users: state.users.concat(action.user)};
    default:
      console.log("This is the initial state: %s", state.users);
      return state;
  }
}
