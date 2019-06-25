export default function manageUsers(state = {users: []}, action){
  switch(action.type) {
    case 'ADD_USER':
      const newUser = {username: action.username, hometown: action.hometown}
      return Object.assign({}, state, {users: state.users.concat(action.user)})
    default:
      return state;
  }
}
