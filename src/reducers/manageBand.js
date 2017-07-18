export default function manageUsers(state = {users: []}, action){
  switch (action.type) {

    case 'ADD_USER':
      let user = {username: action.user.username, hometown: action.user.hometown}
      return {users: state.users.concat(user)}
    default:
    return state
  }

}
