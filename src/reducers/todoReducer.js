const initState = {
    todos: [
        { id: 1, todo: "Buy Milk" },
        { id: 2, todo: "Sleep More" },
    ],
};

function todoReducer(state = initState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.newTodo],
            };
        case "DELETE_TODO":
            console.log("delete action");
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return action.id !== todo.id;
                }),
            };

        default:
            return state; // state is now the same state as before
    }
}

export default todoReducer;
