import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample2EditComponent } from './sample2-edit.component';

describe('Sample2EditComponent', () => {
  let component: Sample2EditComponent;
  let fixture: ComponentFixture<Sample2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample2EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
