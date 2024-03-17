import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample3CreateComponent } from './sample3-create.component';

describe('Sample3CreateComponent', () => {
  let component: Sample3CreateComponent;
  let fixture: ComponentFixture<Sample3CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample3CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample3CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
