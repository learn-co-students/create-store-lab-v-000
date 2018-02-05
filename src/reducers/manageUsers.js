let id = 1;

export default function manageUsers(state = { users: [] }, action) {
  switch(action.type) {
    case "ADD_USER":
      const user = { username: action.user.username, hometown: action.user.hometown };
      return Object.assign({}, state, {
        users: state.users.concat(user)
      });
      console.log(users)
    case "DELETE_USER":
      const users = state.users.filter(user => user.id !== action.id);
      return Object.assign({}, state, { users });
    default:
      return state;
  }
}
