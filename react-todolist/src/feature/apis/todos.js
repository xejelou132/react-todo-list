import api from "./index";

export const getTodos =  () =>{
    return   api.get("/todos");
}

export const createTodo =  (text) =>{
    return   api.post("/todos",{text});
}

export const updateTodo =  (id, updateTodo) =>{
    return  api.put(`/todos/${id}`,updateTodo);
}

export const deleteTodos =  (id) =>{
    return  api.delete(`/todos/${id}`);
}