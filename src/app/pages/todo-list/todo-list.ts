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
  todos = signal<string[]>(['Покакать', 'Покушать']);
  editValue = signal('');
  editingIndex = signal<number | null>(null);
  editingText = signal('');
  addTodo() {
    this.todos.update((prev) => [...prev, this.input()]);
    this.input.set('');
  }
  deleteTodo(Todo: string) {
    this.todos.update((todo) => todo.filter((todo) => todo !== Todo));
  }
  startEdit(index: number, value: string) {
    this.editingIndex.set(index);
    this.editingText.set(value);
  }
  saveTodo() {
    const index = this.editingIndex();
    if (index !== null) {
      this.todos.update((prev) => {
        const arr = [...prev];
        arr[index] = this.editingText();
        return arr;
      });
      this.cancelEdit();
    }
  }
  cancelEdit() {
    this.editingIndex.set(null);
    this.editingText.set('');
  }
}
