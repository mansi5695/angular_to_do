// src/app/todo.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: { id: number; text: string; completed: boolean }[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(text: string) {
    const newTodo = { id: Date.now(), text, completed: false };
    this.todos.push(newTodo);
  }

  updateTodo(id: number, text: string) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.text = text;
    }
  }

  deleteTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed; // Toggle completed property
    }
  }
}
