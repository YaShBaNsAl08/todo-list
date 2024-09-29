import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo!:Todo;
  @Input() id!:number;
  @Output() deltodo: EventEmitter<Todo> = new EventEmitter();
  @Output() checktodo: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  delitem(todo:Todo){
    this.deltodo.emit(todo);
  }
  Oncheckbox(todo: Todo | undefined){
    this.checktodo.emit(todo);
  }
}
