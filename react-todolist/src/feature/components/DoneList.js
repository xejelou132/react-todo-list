import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { selectDoneList }  from '../reducer/todoSlice';

function DoneList() {
    const doneItems = useSelector(selectDoneList);
    return (
        
        <div>
            {doneItems.map((item)=> (
                <TodoItem key={item.id} id={item.id}></TodoItem>
        ))} </div>
    );
}

export default DoneList;