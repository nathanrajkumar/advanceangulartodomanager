import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDo } from '../../model/to-do.model';
import { addToDo } from '../../ngRx/todo.actions';

@Component({
  selector: 'modal-to-do-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-add-modal.component.html',
  styleUrl: './to-do-add-modal.component.scss'
})
export class ToDoAddModalComponent {
  
  todoForm: FormGroup;

  constructor(private formBuilder : FormBuilder, private store: Store) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['low', Validators.required]
    })
  }

  onSubmit() : void {
    // call action to save global state
    // use effect to call api to save task and task priority
    console.log("TEST")
    const newToDo : ToDo = {
      ...this.todoForm.value,
      id: Date.now(),
      completed: false
    }
    console.log(newToDo)
    this.store.dispatch(addToDo({ todo: newToDo }))
    this.todoForm.reset
  } 

}
