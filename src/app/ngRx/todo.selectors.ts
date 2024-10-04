import { createSelector } from "@ngrx/store"
import { ToDo } from "../model/to-do.model"

export const selectTodos = (state: any) => state.todos
export const selectCompletedTodos = createSelector(
    selectTodos, 
    (todos: ToDo[]) => todos.filter(todo => todo.completed)
)