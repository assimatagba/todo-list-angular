import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService : TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  defaultStatus = 'Pas commencé';

  OnSubmit(form: NgForm) {
    const title = form.value['title'];
    const status = form.value['status'];
    this.todoService.addTodo(title, status);
    // this.router.navigate(['todos-list']);
    this.onSave();
    console.log(form.value);
  }

  onSave() {
    this.todoService.saveTodoToServer();
  }

}
