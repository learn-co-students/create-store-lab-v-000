export default function manageUsers(state = {
  users: []
}, action){
    switch(action.type){
      case 'ADD_USER':
        return {
          ...state,
          users: state.users.concat(action.user) // Concatenates new user to index
        }

        default:
          return state;
    }
  }
