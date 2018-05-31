import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo;
  @Output() removeTodo = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  remove(id: number): void {
    this.removeTodo.emit(id);
  }
  changeTodoStatus(todo) {
    todo.done = !todo.done;
  }
}
