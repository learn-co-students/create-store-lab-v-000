export default function manageUsers(state = {
    users: [],
}, action){
    switch (action.type) {
        case 'ADD_USER':
            
            return {
                users: [
                    ...state.users,
                    {
                        ...action.user
                    }
                ]
            }
    
        default:
            return state;
    }
}
