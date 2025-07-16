import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompleteDialogComponent } from './todo-complete-dialog.component';

describe('TodoCompleteDialogComponent', () => {
  let component: TodoCompleteDialogComponent;
  let fixture: ComponentFixture<TodoCompleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCompleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
