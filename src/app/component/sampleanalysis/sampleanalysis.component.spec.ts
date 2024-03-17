import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleanalysisComponent } from './sampleanalysis.component';

describe('SampleanalysisComponent', () => {
  let component: SampleanalysisComponent;
  let fixture: ComponentFixture<SampleanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
