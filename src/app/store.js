import {configureStore} from '@reduxjs/toolkit';
import TodolistReducer from '../features/todolist-slice';

export const store = configureStore({
    reducer: {
        todolist: TodolistReducer,
    }
});