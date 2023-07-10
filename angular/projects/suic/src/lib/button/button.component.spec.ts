import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuicButtonComponent } from './button.component';

describe('SuicButtonComponent', () => {
  let component: SuicButtonComponent;
  let fixture: ComponentFixture<SuicButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuicButtonComponent],
    });
    fixture = TestBed.createComponent(SuicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
