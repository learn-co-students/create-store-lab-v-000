export default function manageBand(state = {
  users: []
}, action) {
  console.log(action)
  switch(action.type) {

    case 'ADD_USER':
      console.log("Current state.users length %s", state.users.length)
      console.log("updating state.users length to %s", state.users.length + 1)
      return Object.assign({}, state, {users: state.users.concat(action.user)})

    default:
      return state
  }

}
