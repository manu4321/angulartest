import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Todo} from '../Todo';
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input()
  todo: Todo;
  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit() {
  }

  toggleTodoComplete(){
    this.toggleComplete.emit(this.todo);
  }

  removeTodo(){
    this.remove.emit(this.todo);
  }

}
