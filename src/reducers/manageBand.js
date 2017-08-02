export default function manageUsers(state = {users: []}, action){
	switch (action.type) {
		case 'ADD_USER':
			const user = {hometown: action.user.hometown, username: action.user.username} 
			return Object.assign({}, state, {users: state.users.concat(user)})
		default: 
			return state;
	}
}
