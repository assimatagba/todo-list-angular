import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoName : string | undefined;
  @Input() todoStatus : string | undefined;
  @Input()
  indexOfTodo!: number;
  @Input() id!: number

  todos = [];
  todosSubscription: Subscription;


  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {

  }

  onViewTodo(id: number) {
    this.router.navigate(['/todo-list', 'view', id]);
  }

  onDelete(id: number, title: string, status: string) {
    const todoId = this.todoService.getTodoById(id);
    // this.todoService.removeTodo(id);
    console.log("id of this todo : ", todoId);
  }

}
