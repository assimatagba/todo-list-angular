import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPanelComponent } from './todo/todo-panel/todo-panel.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListViewComponent } from './todo/todo-list-view/todo-list-view.component';
import { TodoComponent } from './todo/todo/todo.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoService } from './services/todo.service';
import { TodoSingleComponent } from './todo/todo-single/todo-single.component';
import { TodoOnWaitComponent } from './todo/todo-on-wait/todo-on-wait.component';

const appRoutes: Routes = [
  { path: 'todo-panel', component: TodoPanelComponent },
  { path: 'todo-list', component: TodoListViewComponent },
  { path: 'todo-list/view/:id', component: TodoSingleComponent },
  { path: 'todo-on-wait', component: TodoOnWaitComponent },
  { path: '', component: TodoPanelComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    TodoPanelComponent,
    TodoFormComponent,
    TodoListViewComponent,
    TodoComponent,
    TodoSingleComponent,
    TodoOnWaitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
