import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentevaluationComponent } from './employmentevaluation.component';

describe('EmploymentevaluationComponent', () => {
  let component: EmploymentevaluationComponent;
  let fixture: ComponentFixture<EmploymentevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentevaluationComponent]
    });
    fixture = TestBed.createComponent(EmploymentevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
