export default function manageUsers(state={
  users:[]
}, action){
  switch (action.type) {
    case 'ADD_USER':
      const user = action.user
      return {...state, users: state.users.concat(user)}
      break;
    default:
      return state
  }
}
