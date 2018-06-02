export default function manageUsers(state ={users:[]}, action){
  console.log('action: ' + JSON.stringify(action))
  console.log('state: ' + JSON.stringify(state))
  switch (action.type){
    case 'ADD_USER':

      const users = state.users.concat(action.user)
      console.log('state: ' + JSON.stringify(users))
      return {users}
    default:
      return state
  }
}
