export default function manageUsers(state = { users: [] }, action){
    switch(action.type) {
        case 'ADD_USER':
            const user = {username: action.user.username, hometown: action.user.hometown}
            return {users: [...state.users, user]}
        default:
            return state;
    }
}
