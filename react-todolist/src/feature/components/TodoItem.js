import React from 'react';
import "../../styles/TodoItem.css"
import { useSelector,useDispatch} from 'react-redux';
import { selectTodoById,ToogleText, deleteTodo } from '../reducer/todoSlice.js';


function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.id));
    const dispatch = useDispatch();
    

    function handleClick(){
        dispatch(ToogleText(props.id));
    }

    const todoStatus = todo.done ? "done" : "";

    function handleDelete(){
        dispatch(deleteTodo(props.id));
    }

    return (
        
        <div className ={`todoItem-todo ${todoStatus}`}>
            <input type="checkbox"  onClick ={handleClick}></input>
            {todo.text}
                 <span onClick= {handleDelete}>X</span>
            </div>
    );
}

export default TodoItem;