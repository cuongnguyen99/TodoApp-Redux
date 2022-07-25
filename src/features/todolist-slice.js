import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    todo_list: []
}

const TodolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        // add new record
        addNew(state, action) {
            state.todo_list.push(action.payload);
        },
        // remove a record
        remove(state, action) {
            console.log(action);
            state.todo_list = state.todo_list.filter((item, i) => {
                return item.title != action.payload;
            })
        },
        // update a record 
        update(state, action) {
            state.todo_list = state.todo_list.map((item) => {
                if(item.title == action.payload.title) {
                    if(action.payload.done == false) {
                        return {...item, done: true};
                    }
                    else if(action.payload.done == true) {
                        return {...item, done: false};
                    }
                }
                return item;
            })
        }
    }
})

export const { addNew, remove, update } = TodolistSlice.actions;
export default TodolistSlice.reducer;