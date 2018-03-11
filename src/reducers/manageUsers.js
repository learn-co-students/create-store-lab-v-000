export default function manageUsers(state = { users: [] }, action){
  switch (action.type) {
  	case 'ADD_USER':
  	  console.log(state.users.concat(action.user))
  	  return {users: state.users.concat(action.user)}
  	default:
  	  return state
  }
}
