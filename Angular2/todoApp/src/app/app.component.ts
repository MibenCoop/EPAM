import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  isEmpty = true;
  curId = 0;
  constructor() {
  }
  saveTodo(value: string): void {
    if (value !== '') {
      this.todos.push({id: this.curId, 'input': value, done: false});
      this.curId++;
      this.isEmpty = false;
    }
  }
  clearTodos(): void {
    this.todos = this.todos.filter(todo => todo.done !== true);
  }
}
