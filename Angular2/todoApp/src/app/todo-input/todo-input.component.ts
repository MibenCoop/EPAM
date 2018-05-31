import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() saved = new EventEmitter();

  newTodo: string;
  constructor() {
    this.newTodo = '';
  }

  ngOnInit() {
  }

  updateUi(value: string): void {
    this.newTodo = value;
  }
  addTodo(inputValue): void {
    this.saved.emit(inputValue.value);
    inputValue.value = '';
  }
}
