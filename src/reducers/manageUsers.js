export default function manageUsers(state={
  users: []
}, action) {
  switch(action.type) {

    case 'ADD_USER':
      console.log('the action is: ')
      console.log(action)
      console.log('store state is: ')
      console.log(state)
      debugger;
      state.users.push(action.user)
      return state
    default:
      return state;
  }
}
