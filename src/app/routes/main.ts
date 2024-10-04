import { Routes } from '@angular/router'

export const MAIN_ROUTES : Routes = [
    {
        path: '',
        loadComponent: () => import ("../component/to-do-list/to-do-list.component").then(mod => mod.ToDoListComponent),
    },
    {
        path: 'detail/:id',
        loadComponent: () => import("../component/to-do-detail/to-do-detail.component").then(mod => mod.ToDoDetailComponent),
    },
    {
        path: 'add',
        loadComponent: () => import("../component/to-do-detail-edit-modal/to-do-detail-edit-modal.component").then(mod => mod.ToDoDetailEditModalComponent)
    }
]