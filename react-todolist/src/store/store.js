import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "../feature/reducer/todoSlice";

const store = configureStore({
    reducer:{
        todoList: todosReducer
    },

});

export default store;