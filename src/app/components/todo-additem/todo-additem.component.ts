import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-additem',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-additem.component.html',
  styleUrl: './todo-additem.component.css'
})
export class TodoAdditemComponent implements OnInit{
  @Output() addtodo: EventEmitter<Todo> = new EventEmitter();
  title!:string;
  desc!:string;
  constructor() { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onSubmit(){
    const todo ={
      Sno : 0,
      title : this.title,
      desc : this.desc,
      active:true
    }
    this.addtodo.emit(todo);
    this.title = '';
    this.desc = '';
  }

}
