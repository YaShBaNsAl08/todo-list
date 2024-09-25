import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAdditemComponent } from './todo-additem.component';

describe('TodoAdditemComponent', () => {
  let component: TodoAdditemComponent;
  let fixture: ComponentFixture<TodoAdditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAdditemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
