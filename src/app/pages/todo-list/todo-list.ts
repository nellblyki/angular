import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  input = signal('');
  todos = signal<string[]>(['fdsfdsfdsfsdfdsf']);
  addTodo() {
    this.todos.update((prev) => [...prev, this.input()]);
    this.input.set('')
  }
}
