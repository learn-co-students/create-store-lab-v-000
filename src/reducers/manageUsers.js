export default function manageUsers(state = { users: [] }, action) {

  switch(action.type) {

     case 'ADD_USER':
       console.log("Current state" + state);
       return Object.assign({}, state, { users: state.users.concat(action.user) });
     default:
       return state;
   }

}
// export default function shoppingListItemReducer(state = {
//   items: []
// }, action) {
//   switch(action.type) {
//
//     case 'INCREASE_COUNT':
//       console.log("Current state.items length %s", state.items.length);
//       console.log("Updating state.items length to %s", state.items.length + 1);
//       return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
//
//     default:
//       console.log("Initial state.items length: %s", state.items.length);
//       return state;
//   }
// }
