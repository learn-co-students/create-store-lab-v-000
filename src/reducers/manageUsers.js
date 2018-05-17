export default function manageUsers(state = {
  users: []
  }, action){

    switch (action.type) {
      case 'ADD_USER':
      debugger
        const user = {...action.user}
        return(
          {...state, users: state.users.concat(user)}
        )
      default:
        return state
    }
}
