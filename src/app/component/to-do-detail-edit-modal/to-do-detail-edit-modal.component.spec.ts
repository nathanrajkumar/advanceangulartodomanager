import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetailEditModalComponent } from './to-do-detail-edit-modal.component';

describe('ToDoDetailEditModalComponent', () => {
  let component: ToDoDetailEditModalComponent;
  let fixture: ComponentFixture<ToDoDetailEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDetailEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoDetailEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
