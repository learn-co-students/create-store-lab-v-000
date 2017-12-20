export default function manageUsers(state = {users: []}, action){
	switch(action.type) {
		case 'ADD_USER':
		 const user = { username: action.user.username, hometown: action.user.username }
		 // return Object.assign({}, state, state.users.concat(user)) 
		 return {...state, users: [action.user]}

		default:
			return state
	};
}
