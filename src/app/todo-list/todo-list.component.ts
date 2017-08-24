import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Todo} from '../Todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output()
  toggle: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onToggleTodoComplete(todo: Todo){
    this.toggle.emit(todo);
  }
  onRemoveTodo(todo: Todo){
    this.remove.emit(todo);
  }
}
