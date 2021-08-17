import React from 'react';
import TodoGroup from './TodoGroup';
import TodoForm from './TodoForm';

function TodoList() {
    return (
        <div>
         <TodoGroup></TodoGroup>
         <TodoForm></TodoForm>
        </div>
    );
}

export default TodoList;