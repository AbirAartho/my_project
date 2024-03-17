import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample2ListComponent } from './sample2-list.component';

describe('Sample2ListComponent', () => {
  let component: Sample2ListComponent;
  let fixture: ComponentFixture<Sample2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
