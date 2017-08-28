export default function manageUsers(state = { users: [] }, action){

  switch(action.type) {

    case 'ADD_USER':
      const users = state.users.concat(action.user)
    return Object.assign({}, state, { users: users } )

    default:
      return state;
  }
}


