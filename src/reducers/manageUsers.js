export default function manageUsers(state = {users: []}, action){
	switch (action.type) {
		case 'ADD_USER':
		  return Object.assign({}, state, {users: state.users.concat({username: action.user.username, hometown: action.user.hometown})})
		default:
		  return state
	}
}
