import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutUsComponent },
];
