export default function manageUsers(state = {
  users: [],
}, action){
  switch(action.type){
    case 'ADD_USER':
      let user = Object.assign({}, action.user);
      return {users: state.users.concat(user)};
    default:
      return state;
  }
}
