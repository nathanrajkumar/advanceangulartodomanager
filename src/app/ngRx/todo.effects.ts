import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadToDoItems, loadToDoSuccess } from "./todo.actions";
import { map, mergeMap } from "rxjs";
import { ToDoService } from "../service/to-do.service";

@Injectable()
export class ToDoEffects {
    loadToDos$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadToDoItems),
            mergeMap(() => this.toDoService.getTodos()
                .pipe(
                    map(todos => loadToDoSuccess({ todos }))
                )
            )
        )   
    )

    constructor(private actions$ : Actions, private toDoService : ToDoService) {}
}