import React, {useState } from 'react';
import "../../styles/TodoItem.css"
import { useSelector,useDispatch} from 'react-redux';
import { deleteTodos, updateTodo } from '../apis/todos';
import { selectTodoById,ToogleText, deleteTodo, updateText } from '../reducer/todoSlice.js';
import { message,Checkbox,Modal,Input } from 'antd';

const success = () => {
    message.success('Deleted todo success');
  };

const { TextArea } = Input;

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.id));
    const dispatch = useDispatch();
    const [text,setText] = useState(todo.text);
    const [isModalVisible, setIsModalVisible] = useState(false);
    

const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () =>  {
    if (text === "") {

        setIsModalVisible(false);
        
    } else {
    updateTodo(props.id, {text: text}).then((response) => {
        dispatch(updateText({id:props.id, updateTodo: response.data}));
    });
    setIsModalVisible(false);
}

  };

  function handleCancel(){
    setIsModalVisible(false);
  };
 
    function handleClick (){
        updateTodo(props.id, {done: !todo.done}).then((response) => {
            dispatch(ToogleText({id:props.id, updateTodo: response.data}));
        });
    }
 
    const todoStatus = todo.done? "done" : "";


    function handleDelete(){   
        deleteTodos(props.id).then((response) => {
            dispatch(deleteTodo(response.data));
        })
        success();
    }
    function handleChange (event) {
        setText(event.target.value);  
    }
    
    return (
        <React.Fragment>
        <div className ={`todoItem-todo ${todoStatus}`}>
            <Checkbox className = "check" onClick ={handleClick} checked = {todoStatus}></Checkbox>
            <span className="span">{todo.text}</span>
                 <button className = "delete" onClick= {handleDelete}>X</button>
                 <button className = {todo.done ? 'edit' : 'editShow'} onClick={showModal}>Edit</button>
            </div>    
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
             <TextArea placeholder = {todo.text} value = {text} onChange = {handleChange}/>

      </Modal>

            </React.Fragment>
    );
    

}

export default TodoItem;