export default function manageUsers(state= {
  users: []
}, action){
  switch(action.type){
    case 'ADD_USER':
    //uses object assign for non destructive addition to object, passes in previous
    //state, then the users prop of state adds the payload of the action
    return Object.assign({}, state, {users: state.users.concat(action.user)})
  default: return state;
}
}
