export default function manageUsers(state = {
  users: []
}, action){
  switch(action.type) {
    case 'ADD_USER':
      const user = Object.assign({}, action.user)
      return Object.assign({}, state, {users: state.users.concat(user)} )
    default:
        return state;
  }
}
