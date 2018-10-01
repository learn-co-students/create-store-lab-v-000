export default function manageUsers(state = {users: []}, action){
  switch(action.type){
    case 'ADD_USER':
      console.log("The username is " + action.user.username);
      console.log("The hometown is " + action.user.hometown)
      return {...state, users: state.users.concat({username: action.user.username, hometown: action.user.hometown})}
    default:
      return state;
  }
}
