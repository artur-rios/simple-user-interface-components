import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuicInputComponent } from './input.component';

describe('SuicInputComponent', () => {
  let component: SuicInputComponent;
  let fixture: ComponentFixture<SuicInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuicInputComponent],
    });
    fixture = TestBed.createComponent(SuicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
