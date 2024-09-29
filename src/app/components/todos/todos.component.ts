import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoAdditemComponent } from "../todo-additem/todo-additem.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAdditemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit{
  localitem:string | null;
  todos!:Todo[];
  constructor() { 
    this.localitem = localStorage.getItem("todos");
    if(this.localitem == null){
    this.todos = [];
  }else{
    this.todos = JSON.parse(this.localitem)
  }
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  deletetodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addtodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  checktodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
