import { createReducer, on } from "@ngrx/store";
import { ToDo } from "../model/to-do.model";
import { addToDo, deleteToDo, loadToDoSuccess, updateToDo } from "./todo.actions";

export const initialState : ToDo[] = [];

export const toDoReducer = createReducer(
    initialState,
    on(loadToDoSuccess, (state, { todos }) => [...todos]),
    on(addToDo, (state, { todo }) => { 
        console.log('Reducer adding todo:', todo);
        return [...state, todo]
    }),
    on(updateToDo, (state, { todo }) => state.map(t => t.id == todo.id ? todo : t)),
    on(deleteToDo, (state, { id }) => state.filter(t => t.id !== id))
)