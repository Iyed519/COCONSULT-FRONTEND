import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateevaluationComponent } from './candidateevaluation.component';

describe('CandidateevaluationComponent', () => {
  let component: CandidateevaluationComponent;
  let fixture: ComponentFixture<CandidateevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateevaluationComponent]
    });
    fixture = TestBed.createComponent(CandidateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
