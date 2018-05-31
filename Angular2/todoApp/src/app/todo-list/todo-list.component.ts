import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  constructor() {
   }

  ngOnInit() {
  }
  remove(id: number): void {
    //Still not understand how realize immutablelist  in angular
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
