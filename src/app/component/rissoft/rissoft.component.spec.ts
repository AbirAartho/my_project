import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RissoftComponent } from './rissoft.component';

describe('RissoftComponent', () => {
  let component: RissoftComponent;
  let fixture: ComponentFixture<RissoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RissoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RissoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
