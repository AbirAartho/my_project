import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersheetListComponent } from './answersheet-list.component';

describe('AnswersheetListComponent', () => {
  let component: AnswersheetListComponent;
  let fixture: ComponentFixture<AnswersheetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersheetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswersheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
