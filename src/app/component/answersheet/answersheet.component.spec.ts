import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersheetComponent } from './answersheet.component';

describe('AnswersheetComponent', () => {
  let component: AnswersheetComponent;
  let fixture: ComponentFixture<AnswersheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswersheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
