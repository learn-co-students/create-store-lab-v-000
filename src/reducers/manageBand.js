let id = 0
export default function manageUsers(state = {users: []}, action){
	switch(action.type){
		case 'ADD_USER':
		  id++  
		  return {users: [Object.assign({}, state.users, action.user, id: id)]}
		default:
		  return state;
	}
}
