import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageUsers(state = {
  users: [],
  }, action){
  switch (action.type) {

    case 'ADD_USER':

      const user = Object.assign({}, action.user ) // creates a new object with a state of username
      return {users: state.users.concat(user)}

       // the following way is another way of writing the above 2 lines of code:
       // return Object.assign({}, state, { users: state.users.concat(action.user) });

      default:
        return state
  }

}
