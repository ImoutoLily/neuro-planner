import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFileTreeComponent } from './notes-file-tree.component';

describe('NotesFileTreeComponent', () => {
  let component: NotesFileTreeComponent;
  let fixture: ComponentFixture<NotesFileTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesFileTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesFileTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
