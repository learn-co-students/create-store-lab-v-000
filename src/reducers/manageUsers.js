export default function manageUsers(state = {
  users: []
}, action) {
  switch (action.type) {
    case 'ADD_USER':
      const user = state.users.last;
      return { users: state.users.concat(user) }
    default: 
      return state;
  }
}

