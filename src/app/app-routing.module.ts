import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: 'todolist', component: TodoListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todo/:id', component: ToDoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
