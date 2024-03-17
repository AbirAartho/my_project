import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample3EditComponent } from './sample3-edit.component';

describe('Sample3EditComponent', () => {
  let component: Sample3EditComponent;
  let fixture: ComponentFixture<Sample3EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample3EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
