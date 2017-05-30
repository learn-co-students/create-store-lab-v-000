export default function manageUsers(state = {users: []}, action){
  switch (action.type){
    case 'ADD_USER':
      const users = state.users.concat(action.user)
      return {...state, users}
    default:
      return state
  }
}
