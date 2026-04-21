import { Routes } from '@angular/router';
import { UsersPage } from './pages/users-page/users-page';
import { IndexPage } from './pages/index-page/index-page';
import { SingleUserPage } from './pages/single-user-page/single-user-page';
import { TodoList } from './pages/todo-list/todo-list';
import { ExchangePage } from './pages/exchange-page/exchange-page';
import { Kt4 } from './ktshki/kt4/kt4';
import { Kt5 } from './ktshki/kt5/kt5';
import { WorkPage } from './ktshki/kt5/work-page/work-page';

export const routes: Routes = [
  { path: '', component: IndexPage },
  { path: 'users', component: UsersPage },
  { path: 'users/:id', component: SingleUserPage },
  { path: 'todo', component: TodoList },
  { path: 'exch', component: ExchangePage },
  { path: 'kt4', component: Kt4 },
  { path: 'kt5', component: Kt5 },
  { path: 'kt5Work', component: WorkPage },
];
