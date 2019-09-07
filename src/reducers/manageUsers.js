
export default function manageUsers(state = {
  users: []
}, action) {
  console.log(action);
  switch(action.type) {
    case 'ADD_USER':
      return {users: state.users.concat(action.user)}
    default:
      return state;
  }
}
