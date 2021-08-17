import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const { v4: uuidv4 } = require('uuid');

const initialState = todosAdapter.getInitialState({

    ids:["1"],
    entities:{  
        1:{
            id:"1",
            text:"testing todo",
            done:false,

        },
    },

});
   

const todoSlice = createSlice({

    
       name:"todos",
       initialState:initialState,
       reducers:{

           AddToDo(state , action){
            todosAdapter.addOne(state,{
             id:uuidv4(),
             text:action.payload,
             done:false,
            });
           },

           ToogleText(state , action){
               const todo = state.entities[action.payload];
               todo.done = !todo.done;

           },

           deleteTodo:todosAdapter.removeOne

       },
   });

   export default todoSlice.reducer;

   export const {AddToDo,ToogleText,deleteTodo} = todoSlice.actions;

   export const { selectIds: selectTodoIds, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todoList);

