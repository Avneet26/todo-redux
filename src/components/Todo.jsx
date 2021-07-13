import React, { useState } from "react";
import { connect } from "react-redux";

function Todo(props) {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        let newTodoObj = {
            id: props.todos.length + 1,
            todo: input,
        };
        props.createTodo(newTodoObj);
        setInput("");
    };

    const handleDelete = (id) => {
        console.log("click" + id);
        props.deleteTodo(id);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.todo}{" "}
                            <button
                                onClick={() => {
                                    handleDelete(todo.id);
                                }}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (store) => {
    console.log(store.todos);
    return store.todos;
};

const mapDispatchtoProps = (dispatch) => {
    return {
        createTodo: (value) => {
            dispatch({ type: "ADD_TODO", newTodo: value });
        },
        deleteTodo: (id) => {
            dispatch({ type: "DELETE_TODO", id: id });
        },
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Todo);
