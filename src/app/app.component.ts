// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newTodo = '';
  todos: { id: number; text: string; completed: boolean }[] = [];

  ngOnInit() {
    this.loadExternalStylesheet(
      'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    );
  }

  loadExternalStylesheet(url: string) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = url;
    document.head.appendChild(linkElement);
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ id: Date.now(), text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  updateTodoText(id: number, currentText: string) {
    const newText = prompt('Update Todo:', currentText);
    if (newText !== null) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }

  deleteTodoItem(id: number) {
    const todoIndex = this.todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    }
  }
}
