import TodoItem from "./TodoItem";
import { initialTodoList } from "../../common/constants/constants.js";
import { getAllToDoIds } from "../../utils/utils.js";


function TodoGroup(props) {
    return (
        <div>{getAllToDoIds(initialTodoList).map((id)=> (
                <TodoItem key={id} id={id}> </TodoItem>
        ))} </div>
    );
}

export default TodoGroup;