import { Routes } from '@angular/router';
import { UsersPage } from './pages/users-page/users-page';
import { IndexPage } from './pages/index-page/index-page';
import { SingleUserPage } from './pages/single-user-page/single-user-page';
import { TodoList } from './pages/todo-list/todo-list';

export const routes: Routes = [
  { path: '', component: IndexPage },
  { path: 'users', component: UsersPage },
  { path: 'users/:id', component: SingleUserPage },
  { path: 'todo', component: TodoList },
];
