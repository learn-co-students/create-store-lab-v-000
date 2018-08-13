export default function manageUsers(state = {
  users: [] 
}, action) {
  switch (action.type) {
    case 'ADD_USER':
      console.log("The username is " + action.user.username)
      console.log("The hometown is " + action.user.hometown)
      const user = {username: action.username, hometown: action.hometown}
      return {...state, users: [...state.users, user]}
    default: 
    return state;
  }
}
