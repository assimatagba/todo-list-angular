import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent implements OnInit {

  todos: any[] | undefined;
  todosSubscription: Subscription | undefined;

  // activer le button au bout de 4sec
  constructor(private todoService: TodoService ) {

  }

  ngOnInit(): void {
    this.todosSubscription = this.todoService.todoSubject.subscribe(
      (todos: any[]) => {
        this.todos = todos;
      }
    );
    // this.onFetch();
    this.todoService.emitTodoSubject();

  }

  // onAllumer() {
  //   this.todoService.switchOnAll();
  // }

  // onEteindre() {
  //   this.appareilService.switchOffAll();
  // }

  // onSave() {
  //   this.todoService.saveTodoToServer();
  // }

  onFetch() {
    this.todoService.getTodoFromServer();
  }
}
