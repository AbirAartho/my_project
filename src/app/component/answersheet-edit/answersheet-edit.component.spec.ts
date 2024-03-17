import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersheetEditComponent } from './answersheet-edit.component';

describe('AnswersheetEditComponent', () => {
  let component: AnswersheetEditComponent;
  let fixture: ComponentFixture<AnswersheetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersheetEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswersheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
