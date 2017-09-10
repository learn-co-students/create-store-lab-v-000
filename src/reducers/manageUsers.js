export default function manageUsers(state = { users: [] }, action) {

  switch(action.type) {

     case 'ADD_USER':
       console.log("Current state" + state);
       return Object.assign({}, state, { users: state.users.concat(action.user) });
     default:
       return state;
   }

}
