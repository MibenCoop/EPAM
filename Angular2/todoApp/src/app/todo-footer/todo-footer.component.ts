import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  @Output() clear = new EventEmitter();
  @Input() isEmpty;
  constructor() { }

  ngOnInit() {
  }

  clearTodos() {
    this.clear.emit();
  }

}
