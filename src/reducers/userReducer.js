let initState = {
    users: [],
};

function UserReducer(state = initState, action) {
    switch (action.type) {
        case "error_users":
            return {
                users: [],
            };
        case "success_users":
            return {
                users: action.payload,
            };
        default:
            return state;
    }
}

export default UserReducer;
