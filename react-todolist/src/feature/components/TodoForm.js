import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../styles/TodoForm.css"
import {AddToDo} from "../reducer/todoSlice";

function TodoForm() {
    
    const [text,setText] = useState("");

    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd(){
        dispatch(AddToDo(text));
        setText("");

    }


    return (
        <div className="todoForm">
           <input type = "text" placeholder="input todo here" value={text}
            onChange={handleChange}/>&emsp;
           <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoForm;