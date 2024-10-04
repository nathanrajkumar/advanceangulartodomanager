import { Route, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routes/main').then(mod => mod.MAIN_ROUTES)
    }
];


