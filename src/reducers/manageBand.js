export default function manageBand(state = {
  users: []
}, action) {
  switch(action.type) {

    case 'ADD_USER':
      const new_user = { username: action.user.username, hometown: action.user.hometown };
      return Object.assign({}, state, { users: state.users.concat(new_user) });
    default:
      return state;
  }
}
