import React from 'react';
import { initialTodoList } from "../../common/constants/constants.js";
import { getTodoById } from "../../utils/utils.js";

function TodoItem(props) {
    const todo = getTodoById(initialTodoList,props.id);
    return (
        <div>{todo.text}</div>
    );
}

export default TodoItem;