import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";

@Injectable()
export class TodoService {
  todoSubject = new Subject<any[]>();

  private todos = [
    {
      id: 0,
      title: 'default todo',
      status: 'default status'
    }
  ]
  constructor(private httpClient: HttpClient) {}

  saveTodoToServer() {
    this.httpClient
    .put('https://http-client-demo-78cfe-default-rtdb.firebaseio.com/todo.json', this.todos).subscribe(
      () => {
        console.log("Todo save successfully");
      },
      (error) => {
        console.log("Error when saving appareil in db : " + error);
      }
    );
  }

  getTodoFromServer() {
    this.httpClient.get<any[]>('https://http-client-demo-78cfe-default-rtdb.firebaseio.com/todo.json').subscribe(
      (response) => {
        this.todos = response;
        this.emitTodoSubject();
        console.log("Data load successfuly");
      },
      (error) => {
        console.log("Erreur de chargement : " + error);

      }
    );
  }


  emitTodoSubject() {
    this.todoSubject.next(this.todos.slice());
  }



  addTodo(title: string, status: string) {
    const todoObject = {
      id: 0,
      title: '',
      status: ''
    };
    todoObject.title = title;
    todoObject.status = status;
    todoObject.id = this.todos[(this.todos.length - 1)].id + 1;


    this.todos.push(todoObject);
    this.emitTodoSubject();
  }

  getTodoById(id: number) {
    const todo = this.todos.find(
      (todoObject) => {
        return todoObject.id === id;
      }
    );
    return todo;
 }


  removeTodo(todoToDelete: { id: number; }) {
    const todo = this.todos.find(
      t => t.id === todoToDelete.id
    ) ;

    if(todo) {
      const searchToodoIndex = this.todos.findIndex((value) => value.id === todoToDelete.id);
      this.todos.splice(searchToodoIndex, 1);
      this.saveTodoToServer();

      return of(true);
    }

    return of(false);

  }

  // switchOnAll() {
  //   for( let appareil of this.appareils ) {
  //     appareil.status = 'allumer'
  //   }
  //   this.emitAppareilSubject();
  // }

  // switchOffAll() {
  //   for ( let appareil of this.appareils) {
  //     appareil.status = 'eteint'
  //   }
  //   this.emitAppareilSubject();

  // }

  // switchOnOne(index: number) {
  //   this.appareils[index].status = 'allumer';
  //   this.emitAppareilSubject();

  // }

  // switchOffOne(index: number) {
  //   this.appareils[index].status = 'eteint';
  //   this.emitAppareilSubject();

  // }




}
