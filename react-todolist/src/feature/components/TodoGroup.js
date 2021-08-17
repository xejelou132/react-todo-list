import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodoIds } from "../reducer/todoSlice";
import "../../styles/TodoForm.css"


function TodoGroup() {

    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
          <h3 className="h3">Your Todos:</h3>
            {todoIds.map((id)=> (
                <TodoItem key={id} id={id}> </TodoItem>
        ))} </div>
    );
}

export default TodoGroup;