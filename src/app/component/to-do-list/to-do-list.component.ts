import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToDoAddModalComponent } from '../to-do-add-modal/to-do-add-modal.component';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectTodos } from '../../ngRx/todo.selectors';
import { ToDo } from '../../model/to-do.model';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor, ToDoAddModalComponent, NgIf, CommonModule, AsyncPipe],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ToDoListComponent implements OnInit {

  should_open_add_task_modal : boolean = false;
  // pull the list of tasks from the state using our selector

  taskList : Array<string> = [
    'task one',
    'task two',
    'task three'
  ];

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.toDoList$.pipe(map(todo => console.log(todo)))
  }

  toDoList$ : Observable<ToDo[]> = this.store.select(selectTodos)


  openAddModal() : boolean {
    this.should_open_add_task_modal = true;
    return this.should_open_add_task_modal
  }
}
