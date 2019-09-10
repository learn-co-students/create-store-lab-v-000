export default function manageUsers(state = { users: [] }, action){
	switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {users: [...state.users, action.user] })
    case 'DELETE_USER':
      const users = state.users.filter(user => user.id !== action.id);
      return  Object.assign({}, state, {users: users})
    default:
      return state;
  }
};
