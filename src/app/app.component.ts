import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'app';
  //newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService){

  }

  onAddTodo(newTodo: Todo){
    this.todoDataService.addTodo(newTodo);
  }
  onToggleTodoComplete(todo: Todo){
    this.todoDataService.toggleTodoComplete(todo);
  }
  onRemoveTodo(todo: Todo){
    this.todoDataService.deleteTodoById(todo.id);
  }
  get todos(){
    return this.todoDataService.getAllTodos();
  }
}
