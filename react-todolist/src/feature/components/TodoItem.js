import React from 'react';
import "../../styles/TodoItem.css"
import { useSelector,useDispatch} from 'react-redux';
import { deleteTodos, updateTodo } from '../apis/todos';
import { selectTodoById,ToogleText, deleteTodo } from '../reducer/todoSlice.js';
import { message,Checkbox } from 'antd';

const success = () => {
    message.success('Deleted todo success');
  };
  
function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.id));
    const dispatch = useDispatch();
    
    function handleClick (){
        updateTodo(props.id, {done: !todo.done}).then((response) => {
            dispatch(ToogleText({id:props.id, updateTodo: response.data}));
        });
        
    }
 
    const todoStatus = todo.done? "done" : "";
    const checkStatus = todo.done? "done" : "";

    function handleDelete(){   
     
        deleteTodos(props.id).then((response) => {
            dispatch(deleteTodo(response.data));
        })
        success();
    }
    
    return (

        <div className ={`todoItem-todo ${todoStatus}`}>
            <Checkbox className = "check" onClick ={handleClick} checked = {checkStatus}></Checkbox>
            <span className="span">{todo.text}</span>
                 <button className = "delete" onClick= {handleDelete}>X</button>
            </div>  
            
            
    );
}

export default TodoItem;