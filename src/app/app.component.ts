import { Component } from '@angular/core';
import { TodoState, TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Simple Todo List in Angular on Codespaces";
  timestamp = new Date();
  debug = true;
  todoItems = new Array();

  ngOnInit(){
    console.log("init called");
    if(this.debug){
      this.debugHardcoreList();
    } 
  }

  get todo(){
    return this.todoItems;
  }

  debugHardcoreList(){
    this.todoItems.push({ state: TodoState.Todo, title: "List Todos", detail: "As a user I would like to list my current todos."});
    this.todoItems.push({ state: TodoState.Todo, title: "Change Todo states", detail: "As a user I would like to change a todo state by checking a 'box'."});
    this.todoItems.push({ state: TodoState.Todo, title: "Add Todo detail", detail: "As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view)."});
    this.todoItems.push({ state: TodoState.Todo, title: "Add new Todo", detail: "As a user I would like to add a new todo in my list."});
    this.todoItems.push({ state: TodoState.Todo, title: "Check yo' self", detail: "Are these Todos too meta ? ;)"});
  }
}
