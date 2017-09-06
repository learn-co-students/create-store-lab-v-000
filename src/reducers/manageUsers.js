export default function manageUsers(state = { users: [] }, action){
  switch(action.type) {
    case 'ADD_USER': {
      let user = Object.assign({}, action.user, {});
      let users = state.users.concat(action.user);
      return { ...state, users };
    }
    case 'DELETE_USER':
      let users = state.users.filter(user => user.id !== action.id);
      return { ...state, users} ;
    default:
      return state;
  }
}
