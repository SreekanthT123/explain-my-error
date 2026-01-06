import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationOutputComponent } from './explanation-output.component';

describe('ExplanationOutputComponent', () => {
  let component: ExplanationOutputComponent;
  let fixture: ComponentFixture<ExplanationOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplanationOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
