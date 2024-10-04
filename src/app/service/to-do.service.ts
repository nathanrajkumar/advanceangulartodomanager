import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ToDo } from "../model/to-do.model";

@Injectable({ providedIn: 'root' })
export class ToDoService {
    
    private todos: ToDo[] = [];
    
    getTodos() : Observable<ToDo[]> {
        return of(this.todos)
    }
    
    addToDo( todo : ToDo ): void {
        this.todos.push(todo);
    } 
}