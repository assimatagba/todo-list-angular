import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.css']
})
export class TodoSingleComponent implements OnInit {
  title: string | undefined;
  status: string | undefined;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.title = this.route.snapshot.params['id'];
    this.title = this.todoService.getTodoById(+id)?.title;
    this.status = this.todoService.getTodoById(+id)?.status;
  }

}
