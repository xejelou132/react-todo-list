import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();


const initialState = todosAdapter.getInitialState({
});
   

const todoSlice = createSlice({

       name:"todos",
       initialState:initialState,
       reducers:{

        AddToDo:todosAdapter.addOne,

           ToogleText(state , action){
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            });

           },

           updateText(state , action){
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            });

           },

           deleteTodo(state, action){
            todosAdapter.removeOne(state, action.payload.id);
        },
        
           addToDos(state,action){
            todosAdapter.addMany(state,action.payload);
        }
       },
         
   });

   export default todoSlice.reducer;

   export const { AddToDo,ToogleText,deleteTodo, addToDos , updateText} = todoSlice.actions;

   export const {
    selectAll:selectTodos,
    selectIds: selectTodoIds, 
    selectById: selectTodoById } = 
    todosAdapter.getSelectors((state) => state.todoList);

    export const selectDoneList = createSelector([selectTodos], (todos) =>
    todos.filter((todo) => todo.done));
    
  

