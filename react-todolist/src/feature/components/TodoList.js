import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../apis/todos';
import { addToDos } from '../reducer/todoSlice.js';
import TodoGroup from './TodoGroup';
import TodoForm from './TodoForm';


function TodoList() {

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            dispatch(addToDos(response.data))
        })
    });

    return (


        <div>
         <TodoGroup></TodoGroup>
         <TodoForm></TodoForm>
        </div>
    );
}

export default TodoList;