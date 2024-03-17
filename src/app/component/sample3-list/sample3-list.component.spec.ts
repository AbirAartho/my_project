import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample3ListComponent } from './sample3-list.component';

describe('Sample3ListComponent', () => {
  let component: Sample3ListComponent;
  let fixture: ComponentFixture<Sample3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample3ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
