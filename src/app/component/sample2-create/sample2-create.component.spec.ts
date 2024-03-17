import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample2CreateComponent } from './sample2-create.component';

describe('Sample2CreateComponent', () => {
  let component: Sample2CreateComponent;
  let fixture: ComponentFixture<Sample2CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample2CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample2CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
