import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabanalysisComponent } from './labanalysis.component';

describe('LabanalysisComponent', () => {
  let component: LabanalysisComponent;
  let fixture: ComponentFixture<LabanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
