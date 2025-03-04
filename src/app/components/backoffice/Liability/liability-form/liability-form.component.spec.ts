import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityFormComponent } from './liability-form.component';

describe('LiabilityFormComponent', () => {
  let component: LiabilityFormComponent;
  let fixture: ComponentFixture<LiabilityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiabilityFormComponent]
    });
    fixture = TestBed.createComponent(LiabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
