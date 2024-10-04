import { createAction, props } from "@ngrx/store";
import { ToDo } from "../model/to-do.model";

export const loadToDoItems = createAction('[ToDo] load ToDoItems');
export const loadToDoSuccess = createAction('[ToDo] load ToDo Success', props<{ todos: ToDo[] }>());
export const addToDo = createAction('[ToDo] add ToDo Task', props<{ todo: ToDo }>());
export const updateToDo = createAction('[ToDo] Update ToDo Task', props<{ todo: ToDo }>());
export const deleteToDo = createAction('[ToDo] Delete ToDo Task', props<{ id: number }>());