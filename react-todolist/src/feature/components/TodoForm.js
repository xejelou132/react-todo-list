import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../styles/TodoForm.css";
import { createTodo } from '../apis/todos';
import { AddToDo } from '../reducer/todoSlice';
import { message,Input} from 'antd';


const success = () => {
    message.success('Added new todo success');
  };
  

const { Search } = Input;
function TodoForm() {
    
    const [text,setText] = useState("");

    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd(){
        if(text===""){
            alert("Please input todo")
        }else{
            createTodo(text).then((response) => {
              dispatch(AddToDo(response.data));
            });
        setText("");
        }
        success();

    }


    return (
        <div className="todoForm">
           <Search  allowClear type = "text" placeholder="input todo here" value={text}
            onChange={handleChange} enterButton="Add"  size="large" onSearch ={handleAdd} />
        </div>
    );
}

export default TodoForm;